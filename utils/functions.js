import Question from '../ethereum/question';
const Fuse = require("fuse.js");

// Validate Email Address Format
const validate = (emailAddress) => {
  if (emailAddress === "admin") {
    return true;
  } else {
    const re = /\S+@e\.ntu\.edu\.sg$/;
    return re.test(emailAddress);
  }
};

// Provides common logging method for logging every transactions
const logging = (message) => {
    let today = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    let date = months[today.getMonth()]+" "+today.getDate()+" "+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time+": "+message;
    return dateTime;
};

// Search Algorithm
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
            weight: 0.4
        }, {
           name:'tags',
           weight: 0.3
        }]
    };
    let fuse = new Fuse(list, options);
    const result = fuse.search(value);
    return result;
}

// Checks required fields are filled up
const checkFieldEmpty = (field) => {
  return field === "" ? false : true;
}

// Checks time-related fields are filled up properly
const checkTimeField = (field) => {
  return field > 0 ? true : false;
}

// Checks ETQ fields are filled up properly
const checkRewardField = (field) => {
  return field >= 1 ? true : false;
}

// Convert to lower case letters in a string
const lowerCase = (item) => {
  for (let i = 0; i<item.length; i++) {
    item[i] = item[i].toLowerCase();
  }
  return item;
}

const sortingQuestions = (summary, sortBy) => {
  switch(sortBy) {
    case 0:
      summary.sort(function(a, b) {
        return a[4] - b[4];
      });
      break;
    case 1:
      summary.sort(function(a, b) {
        return b[4] - a[4];
      });
      break;
    case 2:
      summary.sort(function(a, b) {
        return a[10] - b[10];
      });
      break;
    case 3:
      summary.sort(function(a, b) {
        return b[10] - a[10];
      });
      break;
    case 4:
      summary.sort(function(a, b) {
        return a[2] - b[2];
      });
      break;
    case 5:
      summary.sort(function(a, b) {
        return b[2] - a[2];
      });
      break;
    default:
      break;
  }
  return summary;
}

const sortingAnswers = (answers, sorted) => {
  if (sorted) {
    answers.sort(function(a, b) {
      return a[4] - b[4];
    });
  } else {
    answers.sort(function(a, b) {
      return b[4] - a[4];
    });
  }
  return answers;
}

export { validate, logging, search, checkFieldEmpty, checkTimeField, checkRewardField, lowerCase, sortingQuestions, sortingAnswers };
