# S5 JS Algorithm for finding passengers

We received a larger project, where it was necessary to break it into several parts and teams to be able to deliver on time. The project is a shared car travel platform, via app.

As you have knowledge about arrays and nested loops, you were responsible for developing the algorithm that finds the closest ride for the driver, providing the passenger's precise coordinates and the distance to the meeting point.

## Assessment

- [x] Passing all tests
- [x] Use of FOR
- [x] Array Manipulation
- [x] Distance calculation
- [x] Logic of the solution
- [x] Variable naming
- [x] Code readability

## Requirements

As precision is extremely important in this functionality, the requirements team managed to stipulate 256 test cases, mapping a part of a small neighborhood and stipulating what the exit should be for all the driver's coordinate possibilities.

You will have access to a file with this simulated 2D map of 16x16 positions and these tests already programmed using console.log() to help you test your algorithm. The main requirement is to work perfectly for all 256 test cases.

Passenger map provided for testing:

```js
const passengerMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
]
```
Positions with a value of 1 are where there is a ride request from a passenger. And the distance between one value and another immediately next to it is always 1 km, in any direction.

The signature of the function to be developed is: findNewRide(driverPositionX, driverPositionY) and the return is an array containing in the first position another array with the coordinates of the closest passenger [x,y] and in the second position a string showing the distance in km to the passenger, with two decimal places of precision, as shown in the example below:

The return of the ⁠⁠findNewRide(0,0) test case should be:
```js
[[7,0],'7.00 km']
```
If the tests are approved, they will be presented in green preceded by the word PASS and as long as the ideal conditions are not met, the tests will be presented in red, preceded by the word FAIL. In both cases, it indicates which driver coordinates were tested in each case.

The map matrix does not need to be passed as a parameter to the function, and can be accessed globally in the code.

The distance to be calculated in the first version is the simplest, in a straight line, also known as Euclidean distance, which follows the same principle as the Pythagorean theorem.

To perform the power and radiciation calculations, you can use the already known arithmetic operators or the Math methods, native to JS.

```js
function findNewRide(driverPositionX, driverPositionY) {
  let minDistance = Infinity;
  let closestPassenger = null;

  for (let i = 0; i < passengerMap.length; i++) {
    for (let j = 0; j < passengerMap[i].length; j++) {
      if (passengerMap[i][j] === 1) {
        const distance = Math.sqrt((i - driverPositionX) ** 2 + (j - driverPositionY) ** 2);
        if (distance < minDistance) {
          minDistance = distance;
          closestPassenger = [i, j];
        }
      }
    }
  }

  return [closestPassenger, minDistance.toFixed(2) + ' km'];
}
```

## Run Tests

```shell
node ./script.js
```
