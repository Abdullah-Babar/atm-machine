#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my ATM Machine \n");
let myBalance = 10000;
let myPin = 1234;
console.log(`My pin ${myPin}\n`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("\nCorrect pin code!!!\n");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Plese select one of them:",
            choices: ["Check balance", "Withdraw", "Fast cash"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("\nYou successfully completed your transaction.");
            console.log(`\nYour remaining balance is: ${myBalance}`);
        }
        else {
            console.log("\nInsufficient balance\n");
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your balance is: ${myBalance}\n`);
    }
    else if (operationAns.operation === "Fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "How much amount you want to fast cash",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= fastCashAns.fastCash;
        console.log("\nYou successfully completed your transaction.\n");
        console.log(`Your remaining balance is: ${myBalance} `);
    }
}
else {
    console.log("Incorrect pin number");
}
