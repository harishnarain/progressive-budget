# Progressive Budget - Yet another budget tracker

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

For this assignment, the app is a progress budget tracker. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

## Table of Contents

- [Progressive Budget - Yet another budget tracker](#progressive-budget---yet-another-budget-tracker)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [License](#license)
  - [Contributing](#contributing)
  - [Screenshots](#screenshots)
  - [Questions](#questions)

## Installation

1. Clone this GitHub repository

   ```
   git@github.com:harishnarain/progressive-budget.git
   ```

2. Install all dependent npm packages

   ```
   npm install --save
   ```

3. Create a MongoDB database
4. If running locally update the MONGODB_URI with your connection string in a .env file
5. If running on a server or hosting platform add the MONGODB_URI with connection string to the environment variables

## Usage

1. Run `npm start` to start the application
2. Enter a name for the transaction and the transaction amount.
3. Click "+Add Funds" or "-Subtract Funds" depending on the nature of the transaction

A demo of the application is available at: https://vast-plateau-45872.herokuapp.com/

## Features

- Enter deposits online/offline
- Enter expenses online/offline
- Offline entries are automatically added to the database upon establishing connectivity

## License

This project uses the MIT license

## Contributing

Pull requests are welcome

## Screenshots

**Home Page**

![Screenshot](https://github.com/harishnarain/progressive-budget/blob/master/Screenshot.PNG?raw=true)

## Questions

Checkout my GitHub [profile](https://github.com/harishnarain)

Please feel free to email at: <harishnarain@gmail.com>
