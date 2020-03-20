import Question from '../ethereum/question';

const Fuse = require("fuse.js");

async function search(value, questions) {
    let list = [];
    for (let i = 0; i < questions.length; i++) {
        var summary = await Question(questions[i]).methods.getSummary().call();
        list.push({'address': questions[i], 'title': summary[0], 'content': summary[1], 'tags': summary[8]});
    }
    let options = {
        id: "address",
        threshold: 0.1,
        shouldSort: true,
        tokenize: true,
        keys: [{
            name: 'title',
            weight: 0.3
        }, {
            name: 'content',
            weight: 0.3
        }, {
           name:'tags',
           weight: 0.4
        }]
    };
    let fuse = new Fuse(list, options);
    const result = fuse.search(value);
    return result;
}

export {search};
