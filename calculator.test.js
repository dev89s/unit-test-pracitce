const Calculator = require('./calculator');

describe('Sum tests', () => {
  test('Sum of 10 and 12', () => {
    // Arrange
    const num1 = 10;
    const num2 = 12;
    const calculator = new Calculator();
    // Act
    const res = calculator.sum(num1, num2);

    // Asses
    expect(res).toBe(22);    
  });
  test('Sum of 5 and 7', () => {
    // Arrange
    const num1 = 5;
    const num2 = 7;
    const calculator = new Calculator();
    // Act
    const res = calculator.sum(num1, num2);

    // Asses
    expect(res).toBe(12);    
  });
  test('Sum of 20 and 30', () => {
    // Arrange
    const num1 = 20;
    const num2 = 30;
    const calculator = new Calculator();
    // Act
    const res = calculator.sum(num1, num2);

    // Asses
    expect(res).toBe(50);    
  });
});

describe('Subtract tests', () => {
  test('Subtract of 10 and 12', () => {
    // Arrange
    const num1 = 10;
    const num2 = 12;
    const calculator = new Calculator();
    // Act
    const res = calculator.subtract(num1, num2);

    // Asses
    expect(res).toBe(-2);    
  });
  test('Subtract of 7 and 5', () => {
    // Arrange
    const num1 = 7;
    const num2 = 5;
    const calculator = new Calculator();
    // Act
    const res = calculator.subtract(num1, num2);

    // Asses
    expect(res).toBe(2);    
  });
  test('Subtract of 30 and 20', () => {
    // Arrange
    const num1 = 30;
    const num2 = 20;
    const calculator = new Calculator();
    // Act
    const res = calculator.subtract(num1, num2);

    // Asses
    expect(res).toBe(10);    
  });
});

describe('Multiply tests', () => {
  test('Multiply of 10 and 12', () => {
    // Arrange
    const num1 = 10;
    const num2 = 12;
    const calculator = new Calculator();
    // Act
    const res = calculator.multiply(num1, num2);

    // Asses
    expect(res).toBe(120);    
  });
  test('Multiply of 5 and 7', () => {
    // Arrange
    const num1 = 5;
    const num2 = 7;
    const calculator = new Calculator();
    // Act
    const res = calculator.multiply(num1, num2);

    // Asses
    expect(res).toBe(35);    
  });
  test('Multiply of 20 and 30', () => {
    // Arrange
    const num1 = 20;
    const num2 = 30;
    const calculator = new Calculator();
    // Act
    const res = calculator.multiply(num1, num2);

    // Asses
    expect(res).toBe(600);    
  });
});

describe('Devide tests', () => {
  test('Devision of 12 by 4', () => {
    // Arrange
    const num1 = 12;
    const num2 = 4;
    const calculator = new Calculator();
    // Act
    const res = calculator.divide(num1, num2);

    // Asses
    expect(res).toBe(3);    
  });
  test('Division of 35 by 7', () => {
    // Arrange
    const num1 = 35;
    const num2 = 7;
    const calculator = new Calculator();
    // Act
    const res = calculator.divide(num1, num2);

    // Asses
    expect(res).toBe(5);    
  });
  test('Division of 20 by 5', () => {
    // Arrange
    const num1 = 20;
    const num2 = 5;
    const calculator = new Calculator();
    // Act
    const res = calculator.divide(num1, num2);

    // Asses
    expect(res).toBe(4);    
  });
});