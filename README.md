# Sudoku Checker

##### A game where players must fill in a 9 x 9 board with numbers.

#### By Anousone Kaseumsouk,Lan Dam, and Jean Jia, 07/31/2018.

## Description

Sudoku is a game where players must fill in a 9 x 9 board with the numbers 1 through 9. Each row and column must have each number from 1 through 9 with no repeats.

## Setup

Install SudokuChecker by cloning this repository.
Install all the webpacks in package.json.

## Technologies Used

Application: JavaScript, Node.js, Webpack, Jasmine, Karma

## Support and Contact

For any questions or support details, please email:
anousonekaseumsouk@icloud.com
ldam77@yahoo.com
jean84646@gmail.com

## Spec

* Conversion table for numbers to Roman Numerals.

|Symbol  | Value    |
|--------|----------|
|I       |1         |
|V       |5         |
|X       |10        |
|L       |50        |
|C       |100       |
|D       |500       |
|M       |1,000     |

* Add the value of the symbols together: 2 = II
* Separate ones, tens, hundreds, thousands, 99 is XCIX, not IC.
* If more than three of the same characters in a row, switch to subtraction from the next higher value: 4 = IV
* Number cannot go higher than 3,999.

| Input           | Expected Output      |
| --------------- |--------------------  |
| 2               | II                   |
| 99              | XCIX                 |
| 4               | IV                   |
| 4000            | Out Of Range         |

### Legal

Copyright (c) 2018 **Anousone Kaseumsouk,Lan Dam, and Jean Jia**

This software is licensed under the MIT license.
