pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;

// Safe Math Library
contract SafeMath {
    function safeAdd(uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a); c = a - b; } function safeMul(uint a, uint b) public pure returns (uint c) { c = a * b; require(a == 0 || c / a == b); } function safeDiv(uint a, uint b) public pure returns (uint c) { require(b > 0);
        c = a / b;
    }
}

// ERC-20 Token for the Decentralised Application
contract EthQuestionToken is SafeMath {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint public _totalSupply;
    address public owner;

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);

    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    constructor() public {
        name = "EthQuestionToken";
        symbol = "EQT";
        decimals = 4;
        _totalSupply = 100000000;
        owner = msg.sender;
        balances[msg.sender] = _totalSupply;
        emit Transfer(address(0), msg.sender, _totalSupply);
    }

    // Allow the admin to mint more tokens
    function mint(uint amount) public {
      require(msg.sender == owner);
      require(_totalSupply + amount >= _totalSupply); // Overflow check

      _totalSupply += amount;
      balances[msg.sender] += amount;
    }

    // Indicates the total number of tokens floating around the ecosystem
    function totalSupply() public view returns (uint) {
        return _totalSupply - balances[address(0)];
    }

    // Returns the number of tokens that a particular address has in their account
    function balanceOf(address tokenOwner) public view returns (uint) {
        return balances[tokenOwner];
    }

    // Checks if the user have the minimum required number of tokens
    function allowance(address tokenOwner, address spender) public view returns (uint) {
        return allowed[tokenOwner][spender];
    }

    // Allow the contract owner can give their approval to the user to collect the required number of tokens
    // from the contract’s address
    // The approve function also checks the transaction against the total supply of tokens to make sure that
    // there are none missing or extra
    function approve(address spender, uint tokens) public returns (bool) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    function transfer(address to, uint tokens) public returns (bool) {
        balances[msg.sender] = safeSub(balances[msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    // It allows a delegate approved for withdrawal to transfer owner funds to a third-party account
    function transferFrom(address from, address to, uint tokens) public returns (bool) {
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }
}
