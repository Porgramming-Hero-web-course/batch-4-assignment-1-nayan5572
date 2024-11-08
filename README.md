[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16978295&assignment_repo_type=AssignmentRepo)
1. How to handle asynchronous operations using async/await over callback/promise TypeScript
Ans: A promise in TypeScript is an object representing the eventual completion or failure of an asynchronous operation. It acts as a placeholder for a value that may be available now, in the future, or never.

Syntax:
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation or task
  // If successful, call resolve with the result
  // If there's an error, call reject with the reason
});
A promise is typically created using the Promise constructor, which takes a callback function with resolve and reject parameters. The asynchronous operation is performed inside this callback.

Why Use Async/Await with a Promise in TypeScript?
The async/await syntax in TypeScript provides a more concise and readable way to work with promises. It makes asynchronous code look and behave like synchronous code, making it easier to understand.

Using async/await with promises helps avoid the callback hell (also known as the pyramid of doom) and makes error handling more straightforward.

1. Create an Asynchronous Function
Use the async keyword before a function declaration to indicate that it contains asynchronous code.
typescript:
async function myAsyncFunction(): Promise<void> {
  // Asynchronous code with await keyword
  try {
    const result = await myPromiseFunction();
    // Process result
  } catch (error) {
    // Handle errors
  }
}

2. Use the await Keyword
Inside the asynchronous function, use the await keyword before calling a promise. This pauses the execution of the function until the promise is resolved or rejected.
TypeScript:
async function myAsyncFunction(): Promise<void> {
  try {
    const result = await myPromiseFunction();
    // Process result
  } catch (error) {
    // Handle errors
  }
}
