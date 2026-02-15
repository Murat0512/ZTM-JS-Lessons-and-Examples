const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var database = [
    {
        username: "Kevin",
        password: "lovelykevin"
    },
    { 
        username: "Karen",
        password: "lovelykaren"
    },
    {
        username: "Murat",
        password: "lovelymurat"}

];

var newsfeed = [
    {
        username: "Kevin",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Karen",
        timeline: "JavaScript is so cool!"
    },
    {
        username: "Kevin",
        timeline: "I agree with you. JavaScript is so cool!"  
    },
    {
        username: "Murat",
        timeline: "I am loving this course!"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log("\nWelcome back, " + username + "!");
        console.log("--- YOUR NEWSFEED ---");
        console.log(newsfeed);
    } else {
        console.log("\nERROR: Sorry, wrong username and password!");
    }
}

// THIS PART REQUIRES THE "TERMINAL" TAB TO WORK
rl.question('What is your username? ', (userNameInput) => {
  rl.question('What is your password? ', (passwordInput) => {
    
    signIn(userNameInput, passwordInput);

    rl.close();
  });
});