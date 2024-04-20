#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = "True";
console.log("\n\t Wellcome to code with Syeda Urooj-Todo List Application\n");
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:",
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added to Todo List Successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "DO You Want to Add More Task?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
    console.log("Your updated Todo-List", todoList);
}
