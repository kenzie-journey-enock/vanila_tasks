# Physical Fitness Test

You need to create a JS script that automates the analysis of the results of a contest test.

The physical fitness test analyzes a set of variables in order to understand whether or not the person has passed the test.

## Preparations

### Initial project structure

- `script.js`:
   - In this file, you will develop your JavaScript code.
   - The variables are already defined with their respective names and values.
   - It is important to use the same names and values so that the tests work correctly.
   - You will find 11 variables started without using the let/const reserved words.
   - One of your tasks will be to decide which declaration is most appropriate for each variable and insert them into the code.
   - Plus, you'll receive more instructions and tips to start writing your script.
- `test.sh`
   - Bash script that you will run to see if the code is working.
- `test_cases.txt`
   - File that contains the test cases to be executed that will be used to evaluate the project.

### Program

The program must receive the person's information, such as height, weight, number of repetitions on the bar, number of sit-ups, distance covered in the race, among others.
It is necessary to convert distances to meters and times to seconds.

#### Male candidates ("male"):

- Minimum height of 1.70 meters;
- At least 6 repetitions on the bar or a minimum duration of 15 seconds;
- At least 41 sit-ups;
- At least 3km in a maximum of 12 minutes of running or at least 5km in a maximum of 20 minutes of running;
- At least 100 meters in a maximum of 1 minute of swimming or a maximum of 30 seconds of diving.

#### Female candidates ("female"):

- Minimum height of 1.60 meters;
- At least 5 repetitions on the bar or a minimum duration of 12 seconds;
- At least 41 sit-ups;
- At least 4km in a maximum of 15 minutes of running or at least 6km in a maximum of 22 minutes of running;
- At least 100 meters in a maximum of 1 minute of swimming or a maximum of 30 seconds of diving;

#### Furthermore, your code must contain comments explaining each conditional made.


## Tests

To understand whether the code is bringing the expected return, the client provided a bash script that tests 20 different people and displays in the terminal whether the result is as expected. 
Each of the 20 tests shows on the terminal the values used in the testing, and whether the expected result matches the result obtained.

A bash script has a `.sh` file extension and is a sequence of operating system commands organized in a file so that you don't have to execute them one by one.

At the end of the 20 tests run, an indicator will be shown on the terminal with information on how many and which tests passed or failed.

### Script bash

Run using the command `./test.sh`
If returns `./test.sh: command not found`
Run it once, to add the command = `chmod +x test.sh`
Afterwards, the `./test.sh` command will work normally.


## Tasks

- [x] Passed all tests
- [x] Comments indicate where each condition is being tested
- [x] Used logical operators to optimize the use of conditional structures
- [x] Used at least once some logical operator to reduce the complexity of the code in the number of ifs/elses
- [x] Code indentation is correct
- [x] Correctly decided on using var/let/const
