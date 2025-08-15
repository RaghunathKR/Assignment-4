# SENG8120 Modern Automated Testing 

Version: Alpaca

## Purpose

This repository houses the code we require for examples and assignments.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

# Modern Automation - Artwork Area Calculator

## 📌 Overview
This project is part of the **Modern Automation Assignment**.  
It provides a function to calculate the **total artwork area** from a list of dimensions, along with automated tests to ensure accuracy.

The solution follows a **Test-Driven Development (TDD)** approach and uses **Node.js + TypeScript + Jest** for implementation and testing.

---

## 🛠 Tech Stack
- **Node.js** – JavaScript runtime
- **TypeScript** – Strongly typed JavaScript
- **Jest** – Testing framework
- **ts-jest** – TypeScript support for Jest

---

## 📂 Project Structure


### `src/`
Contains the source code for the project.

- `calculateArtworkArea.ts`: A TypeScript function that calculates the total artwork area.

### `tests/`
Contains test cases for the source code.

- `calculateArtworkArea.test.ts`: Jest test cases to validate the functionality of `calculateArtworkArea.ts`.

### Root Files

- `package.json`: Defines project metadata, scripts, and dependencies.
- `tsconfig.json`: Configuration file for the TypeScript compiler.
- `README.md`: Documentation file providing an overview and usage instructions for the project.

---
# Example Test Cases 

The function has been tested under various scenarios to ensure accuracy and robustness:

- **Normal values**: Positive dimensions are processed correctly.  
- **Empty array**: Returns `0` when no data is provided.  
- **Negative or zero values**: These values are ignored in the calculation.  
- **Large numbers**: Handles big dimensions without errors.  
- **Floating point dimensions**: Supports decimal values accurately.

---


## Summary

This structure ensures a clean separation between source code and tests, while also including essential configuration and documentation files to support development and usage.

