# Refactoring Physical Fitness Test

The physical fitness test analyzes a set of variables in order to understand whether or not the person has passed the test.

You need to making the code written for the TAF test easier to understand and also making it reusable for other tests that may be implemented in the future.

## Preparations

- Separate the validations of each of these variables into functions:
    - Abs
    - Swim
    -Height
    -BarTest
    - Run
- Implement the areCandidateResultsValid() function already declared in the template, using the other implemented functions;
- Implement a function that shows the output in upper case in the console, regardless of how the parameter is passed, the function signature is: showMessage(message).
- Refactor the code so that the logic is better organized, thinking about how the lines of code are repeated less and less, but still easy to read.

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


### Script bash

Run using the command `./test.sh`
If returns `./test.sh: command not found`
Run it once, to add the command = `chmod +x test.sh`
Afterwards, the `./test.sh` command will work normally.


## Tasks

- [ ] Lógica passando nos testes
- [ ] Abs - Foi declarada uma função que valida corretamente o critério: Teste de Abdominais
- [ ] Swim - Foi declarada uma função que valida corretamente o critério: Natação (Nado ou mergulho)
- [ ] Height - Foi declarada uma função que valida corretamente o critério: Altura
- [ ] BarTest - Foi declarada uma função que valida corretamente o critério: Teste de Barra
- [ ] Run - Foi declarada uma função que valida corretamente o critério: Corrida
- [ ] Candidate - Foi declarada uma função que valida corretamente todos os resultados do candidato, utilizando as demais funções.
- [ ] Exibição do resultado - Foi declarada uma função que exibe o resultado conforme os requisitos do projeto.
- [ ] Nomenclatura de funções - Todas as funções declaradas têm nomes descritivos e intuitivos, padrão camelCase e em inglês.
- [ ] Nomenclatura de variáveis - Todas as variáveis declaradas têm nomes descritivos e intuitivos, padrão camelCase e em inglês.
- [ ] Formatação geral do código - O código está organizado e de fácil visualização na tela: Indentação, tamanho das linhas, quebras de linhas, uso correto de parenteses, chaves.


- [x] Logic passing tests
- [x] Abs - A function has been declared that correctly validates the criterion: Abdominal Test
- [x] Swim - A function was declared that correctly validates the criterion: Swimming (Swimming or diving)
- [x] Height - A function has been declared that correctly validates the criterion: Height
- [x] BarTest - A function has been declared that correctly validates the criterion: Bar Test
- [x] Run - A function was declared that correctly validates the criterion: Run
- [x] Candidate - A function was declared that correctly validates all candidate results, using the other functions.
- [x] Result display - A function has been declared that displays the result according to the project requirements.
- [x] Function naming - All declared functions have descriptive and intuitive names, camelCase standard and in English.
- [x] Variable naming - All declared variables have descriptive and intuitive names, camelCase standard and in English.
- [x] General formatting of the code - The code is organized and easy to view on the screen: Indentation, line size, line breaks, correct use of parentheses, braces.