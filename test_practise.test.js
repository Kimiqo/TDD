const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./test_practise.js');

test("Capitalize first letter of string", () => {
    expect(capitalize("zebra")).toBe("Zebra"); 
});

test("Reversed String", () => {
    expect(reverseString("1234")).toBe("4321"); 
});

test("Calculator => Add", () => {
    expect(calculator.add(2,8)).toBe(10); 
});

test("Calculator => Sub", () => {
    expect(calculator.subtract(12,2)).toBe(10); 
});

test("Calculator => Mult", () => {
    expect(calculator.multiply(2,5)).toBe(10); 
});

test("Calculator => Div", () => {
    expect(calculator.divide(100,10)).toBe(10);
});

test("Caesar Cipher", () => {
    expect(caesarCipher("xyz",3)).toBe("abc");
})

test("Analyze Array => Avg", () => {
    expect(analyzeArray.average([1,8,3,4,2,6])).toBe(4);
})

test("Analyze Array => Min", () => {
    expect(analyzeArray.min([1,8,3,4,2,6])).toBe(1);
})

test("Analyze Array => Max", () => {
    expect(analyzeArray.max([1,8,3,4,2,6])).toBe(8);
})

test("Analyze Array => Length", () => {
    expect(analyzeArray.length([1,8,3,4,2,6])).toBe(6);
})



 

