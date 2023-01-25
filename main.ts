
export{}

let message="Hello world";
console.log(message);

//Note:
    // tsc main --watch  --> this command is for compiler to check the ts file for changes to reflect that changes in js file automatically 
   //Error: cannot redeclare block-scoped variable 'message' -->   //we need to put export or import statment to make this file as a module instead of script 