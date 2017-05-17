# Bootcamp Home Session 1 - Finding the Minimum and Maximum Numbers in an Array

This repo holds a solution that takes an array of numbers and checks for the minimum and maximum elements

## Getting Started

To use this solution:

 - Open your Terminal or Command Prompt and [Navigate](https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855) to folder you want to keep working copy of repo.

 - Clone this repository: 

     run from your git terminal-
  ```https://github.com/OsayamenOsaretin/abv_bc_session1/blob/function-findMinMax/README.md``` 

 

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
It should return a single element array if all elements in the array are same, and thus equal
```

Tests should also check for agreeable input

``` 
It should return an array [minimumElement, maximumElement] for any array passed
```

## Asymptotic Analysis
The algorithm keeps track of the minimum and maximum values while iterating through the 
the array elements. It checks the edge case where minimum and maximum values are the same which
means that the elements of the array are all the same.
   
 ```- Instantiations : Take constant time a * O(1)
 - The for loop for keeping track of min and max values: 
                                                - each if statement contained takes constant time, so b * O(1)
                                                 - the for loop runs in linear time with the length of the array O(n)
                                                                
 - Final assigments: Take constant time d * O(1)```
  
   
     ```Total asymptotic run time complexity: a * O(1) + (b * O(1) * O(n)) + d * O(1)
                                  complexity is dominated by linear component 
  
                                         O(N) is = O(n) (Linear time)```

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

