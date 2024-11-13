import { calculateArea as calculateRectangleArea } from './rectangle.js';
import { calculateArea as calculateCircleArea } from './circle.js';

function displayAreas() {
  const rectangleWidth = 5;
  const rectangleHeight = 10;
  const circleRadius = 7;

  const rectangleArea = calculateRectangleArea(rectangleWidth, rectangleHeight);
  const circleArea = calculateCircleArea(circleRadius);

  console.log(`Area of Rectangle: ${rectangleArea}`);
  console.log(`Area of Circle: ${circleArea}`);
}

displayAreas();
