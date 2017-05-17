# Bootcamp Home Session 1 - Arithmetic and Geometric Progression

This repo holds a solution that takes an array and checks for an Arithmetic or Geometric Progression.

## Getting Started

To use this solution:

 - Open your Terminal or Command Prompt and [Navigate](https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855) to folder you want to keep working copy of repo.

 - Clone this repository: 

                       run from your git terminal
 
 ```git clone https://githubcom/OsayamenOsaretin/abv_bc_session1/tree/function-aritGeo``` 

 

- In your working directory, install dependencies by running:

                           ```npm install```

 

### Prerequisites
You need these installed if you want the sweet awesomeness of an A.P and G.P checker

- [Git](https://git-for-windows.github.io/) 
- [node.js](https://nodejs.org/en/download/)



### Installing
After collecting and installing the prerequisites:
- 

Install dependencies

```
npm install
```


## Running the tests

To the run the tests:

``` npm test```

### Break down of what tests test

Tests were designed to cover edge cases

```
It should return -1 for arrays that are neither Arithmetic nor Geometric
It should return 0 for empty strings
```

Tests should also check for agreeable input

``` 
Arrays of numbers that are Geometric Progressions should return 'Arithmetic'
Arrays of numbers that are Arithmetic Progressions should return 'Geometric'
```

## Asymptotic Analysis

    The algorithm checks for edge cases and returns appropriate values, then it checks for the arithmetic progressions and geometric progressions by keeping track of the minimum differences and maximum differences as well as the minimum and maximum ratios between consecutive elements in the array.
    
 * First if statement to test for empty array: Takes constant time O(1)
 * Instatiations: Take constant time O(1)
 * For loop iterates through entire array once: Takes time Linear with the size of the input O(n)
   
 * Final tests: Take constant time O(1)
   
   
     ```Final Asymptotic complexity : O(N) = a * O(1) + b * O(1) + O(n) + c * O(1)
                               
                               O(N) approximately=  O(n) 
                               since a, b and c are constants and negligble ```

## Built With

* [Sublime Text](hhttp://www.sublimetext.com/) - Text Editor used.
* [Git](https://github.com/) - Version Control
* [node.js](https://nodejs.org/) - Backend Javascript environment
* [jasmine]() - Testing Framework


## Authors

* **Osayamen** - *Initial work* [OsayamenOsaretin](github.com/OsayamenOsaretin)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Andela Bootcamp Facilitators and BFAs
* Andela Bootcampers
* Developer community

