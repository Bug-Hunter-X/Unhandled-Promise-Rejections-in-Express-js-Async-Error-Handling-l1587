# Unhandled Promise Rejections in Express.js Async Error Handling

This repository demonstrates a common issue in Express.js applications: unhandled promise rejections arising from asynchronous database operations. The provided example showcases a scenario where an error during a database query is not properly handled, leading to application instability.

## Problem Description

The `bug.js` file contains an Express.js route that fetches user data from a database.  If the database operation fails (e.g., due to a network error or the user not being found), the application does not gracefully handle the error. This results in an unhandled promise rejection, potentially causing the server to crash or behave unpredictably.

## Solution

The `bugSolution.js` file demonstrates how to correctly handle asynchronous errors using `try...catch` blocks or `.catch()` methods.  The solution ensures that any errors during the database operation are caught and handled gracefully, preventing unhandled promise rejections.

## How to reproduce the bug
1. Clone this repository.
2. Run `node bug.js` (replace the database interaction with your own to simulate failure).
3. Observe the lack of error handling and the likely unhandled promise rejection in the console.
4. Run `node bugSolution.js` to see the proper error handling implementation.