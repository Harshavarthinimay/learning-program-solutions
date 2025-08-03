# CricketApp - ReactJS Hands-On Lab Project

This project is a simple **ReactJS** application built as part of a hands-on lab (HOL) to demonstrate key ES6 and React features like:

- `map()` method
- Arrow functions
- Destructuring
- `let`, `const`, `var`
- Merging arrays
- Conditional rendering

---

##  Features Implemented

###  ListofPlayers Component
- Uses an array of 11 player objects with `name` and `score`.
- Displays all players using the `map()` method.
- Filters and displays players with a score **below 70** using **arrow functions**.

###  IndianPlayers Component
- Declares two arrays: `T20players` and `RanjiTrophyPlayers`.
- Merges the two using the spread operator (`...`).
- Splits players into **odd** and **even** teams using **array destructuring** and index filtering.

### Conditional Rendering
- Displays either `ListofPlayers` or `IndianPlayers` based on a boolean `flag`.

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js
- NPM (Node Package Manager)
- Visual Studio Code or any preferred IDE

### Installation
```bash
git clone https://github.com/YOUR_USERNAME/cricketapp.git
cd cricketapp
npm install
npm start
