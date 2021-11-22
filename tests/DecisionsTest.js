import Decisions from '../src/Decisions.js';
import { assert } from 'chai';

const d = new Decisions();

// Exercise 1
describe("Determines if the last digit of a number is equal to 4",()=>{
   it(`it should return False if both number aren't whole and last digit is 4`,()=>{
        assert.isFalse(d.isLastDigitFour(40));
        assert.isFalse(d.isLastDigitFour(22.5));
        assert.isFalse(d.isLastDigitFour(-53));
        assert.isFalse(d.isLastDigitFour('hello'));
        assert.isFalse(d.isLastDigitFour(true));
        assert.isFalse(d.isLastDigitFour([5]));
    });
    it(`it should return true if all digits are whole and last digit is 4`,()=>{
        assert.isTrue(d.isLastDigitFour(44));
        assert.isTrue(d.isLastDigitFour(-44));
        assert.isTrue(d.isLastDigitFour(4));
        assert.isTrue(d.isLastDigitFour(5648284));
    });
});

// Exercise 2
describe("Determines if a number is whole and has 3 digits",()=>{
   it(`it should return False if numbers aren't whole and have 3 digits`,()=>{
        assert.isFalse(d.isTripleDigits(4050));
        assert.isFalse(d.isTripleDigits(22.5));
        assert.isFalse(d.isTripleDigits(-53));
        assert.isFalse(d.isTripleDigits('hello'));
        assert.isFalse(d.isTripleDigits(true));
        assert.isFalse(d.isTripleDigits([5]));
    });
    it(`it should return True if numbers are whole and has 3 digits`,()=>{
        assert.isTrue(d.isTripleDigits(454));
        assert.isTrue(d.isTripleDigits(111));
        assert.isTrue(d.isTripleDigits(100));
        assert.isTrue(d.isTripleDigits(-864));
        assert.isTrue(d.isTripleDigits(-999));
    });
});

// Exercise 3
describe("Determines if a number is both whole and negative",()=>{
   it(`it should return False if numbers aren't both whole and negative`,()=>{
        assert.isFalse(d.isNegative(4050));
        assert.isFalse(d.isNegative(22.5));
        assert.isFalse(d.isNegative(53));
        assert.isFalse(d.isNegative('hello'));
        assert.isFalse(d.isNegative(true));
        assert.isFalse(d.isNegative([5]));
    });
    it(`it should return True if numbers are both whole and negative`,()=>{
        assert.isTrue(d.isNegative(-454));
        assert.isTrue(d.isNegative(-111));
        assert.isTrue(d.isNegative(-100));
        assert.isTrue(d.isNegative(-864));
        assert.isTrue(d.isNegative(-999));
    });
});

// Exercise 4
describe("Determines the sum of its two digits. The number must only be 2 digits",()=>{
   it(`it should return False if the number isn't 2 digits and if both numbers aren't whole`,()=>{
        assert.isFalse(d.wholeSum(4050));
        assert.isFalse(d.wholeSum(22.5));
        assert.isFalse(d.wholeSum(3));
        assert.isFalse(d.wholeSum(333));
        assert.isFalse(d.wholeSum('hello'));
        assert.isFalse(d.wholeSum(true));
        assert.isFalse(d.wholeSum([5]));
    });
    it(`it should return True if the number is 2 digits and if both numbers are whole`,()=>{
        assert.deepEqual(d.wholeSum(-54),-9);
        assert.deepEqual(d.wholeSum(-11),-2);
        assert.deepEqual(d.wholeSum(55),10);
        assert.deepEqual(d.wholeSum(64),10);
        assert.deepEqual(d.wholeSum(99),18);
    });
});

// Exercise 5
describe("Determines if both digits are pair from a 2 digit number",()=>{
   it(`it should return False if the number isn't 2 digits and if both numbers aren't pair`,()=>{
        assert.isFalse(d.isPair(4050));
        assert.isFalse(d.isPair(22.5));
        assert.isFalse(d.isPair(3));
        assert.isFalse(d.isPair(333));
        assert.isFalse(d.isPair(33));
        assert.isFalse(d.isPair(43));
        assert.isFalse(d.isPair(-33));
        assert.isFalse(d.isPair(-43));
        assert.isFalse(d.isPair('hello'));
        assert.isFalse(d.isPair(true));
        assert.isFalse(d.isPair([5]));
    });
    it(`it should return True if the number is 2 digits and if both numbers are pair`,()=>{
        assert.isTrue(d.isPair(-44));
        assert.isTrue(d.isPair(-64));
        assert.isTrue(d.isPair(82));
        assert.isTrue(d.isPair(64));
        assert.isTrue(d.isPair(40));
    });
});

// Exercise 6
describe("Determines when a 2 digit number is prime below 20",()=>{
   it(`it should return False if the number isn't 2 digits and if it isn't prime`,()=>{
        assert.isFalse(d.isPrimeBetween10and20(4050));
        assert.isFalse(d.isPrimeBetween10and20(22.5));
        assert.isFalse(d.isPrimeBetween10and20(3));
        assert.isFalse(d.isPrimeBetween10and20(333));
        assert.isFalse(d.isPrimeBetween10and20(33));
        assert.isFalse(d.isPrimeBetween10and20(43));
        assert.isFalse(d.isPrimeBetween10and20(12));
        assert.isFalse(d.isPrimeBetween10and20(-12));
        assert.isFalse(d.isPrimeBetween10and20(-43));
        assert.isFalse(d.isPrimeBetween10and20('hello'));
        assert.isFalse(d.isPrimeBetween10and20(true));
        assert.isFalse(d.isPrimeBetween10and20([5]));
    });
    it(`it should return True if the number is 2 digits and if it is prime`,()=>{
        assert.isTrue(d.isPrimeBetween10and20(-13));
        assert.isTrue(d.isPrimeBetween10and20(-17));
        assert.isTrue(d.isPrimeBetween10and20(13));
        assert.isTrue(d.isPrimeBetween10and20(11));
        assert.isTrue(d.isPrimeBetween10and20(19));
    });
});

// Exercise 7
describe("Determines if a 2 digit number is both prime and negative",()=>{
   it(`it should return False if a 2 digit number is isn't prime or negative or both`,()=>{
        assert.isFalse(d.isPrimeNegative(4050));
        assert.isFalse(d.isPrimeNegative(22.5));
        assert.isFalse(d.isPrimeNegative(3));
        assert.isFalse(d.isPrimeNegative(333));
        assert.isFalse(d.isPrimeNegative(33));
        assert.isFalse(d.isPrimeNegative(-4050));
        assert.isFalse(d.isPrimeNegative(-22.5));
        assert.isFalse(d.isPrimeNegative(-3));
        assert.isFalse(d.isPrimeNegative(-333));
        assert.isFalse(d.isPrimeNegative(-34));
        assert.isFalse(d.isPrimeNegative(13));
        assert.isFalse(d.isPrimeNegative(43));
        assert.isFalse(d.isPrimeNegative('hello'));
        assert.isFalse(d.isPrimeNegative(true));
        assert.isFalse(d.isPrimeNegative([5]));
    });
    it(`it should return True if a 2 digit number is both prime and negative`,()=>{
        assert.isTrue(d.isPrimeNegative(-13));
        assert.isTrue(d.isPrimeNegative(-17));
        assert.isTrue(d.isPrimeNegative(-11));
        assert.isTrue(d.isPrimeNegative(-41));
        assert.isTrue(d.isPrimeNegative(-43));
    });
});


// Exercise 8
describe("Determine if 2 numbers are multiples of each other",()=>{
   it(`it should return False if 2 numbers are not multiples of each other`,()=>{
        assert.isFalse(d.isMultiplicable(4050));
        assert.isFalse(d.isMultiplicable(22.5));
        assert.isFalse(d.isMultiplicable(3));
        assert.isFalse(d.isMultiplicable(333));
        assert.isFalse(d.isMultiplicable(53));
        assert.isFalse(d.isMultiplicable(-4050));
        assert.isFalse(d.isMultiplicable(-22.5));
        assert.isFalse(d.isMultiplicable(-3));
        assert.isFalse(d.isMultiplicable(-333));
        assert.isFalse(d.isMultiplicable(-34));
        assert.isFalse(d.isMultiplicable(23));
        assert.isFalse(d.isMultiplicable(45));
        assert.isFalse(d.isMultiplicable('hello'));
        assert.isFalse(d.isMultiplicable(true));
        assert.isFalse(d.isMultiplicable([5]));
    });
    it(`it should return True if 2 numbers are multiples of each other`,()=>{
        assert.isTrue(d.isMultiplicable(-13));
        assert.isTrue(d.isMultiplicable(-17));
        assert.isTrue(d.isMultiplicable(26));
        assert.isTrue(d.isMultiplicable(42));
        assert.isTrue(d.isMultiplicable(60));
    });
});

// Exercise 9
describe("Determine both numbers are prime in a two digit number",()=>{
   it(`it should return False if both numbers are not prime in a two digit number`,()=>{
        assert.isFalse(d.isBothPrime(4050));
        assert.isFalse(d.isBothPrime(22.5));
        assert.isFalse(d.isBothPrime(3));
        assert.isFalse(d.isBothPrime(333));
        assert.isFalse(d.isBothPrime(81));
        assert.isFalse(d.isBothPrime(-4050));
        assert.isFalse(d.isBothPrime(-22.5));
        assert.isFalse(d.isBothPrime(-3));
        assert.isFalse(d.isBothPrime(-333));
        assert.isFalse(d.isBothPrime(-34));
        assert.isFalse(d.isBothPrime(65));
        assert.isFalse(d.isBothPrime(43));
        assert.isFalse(d.isBothPrime('hello'));
        assert.isFalse(d.isBothPrime(true));
        assert.isFalse(d.isBothPrime([5]));
    });
    it(`it should return True if both numbers are prime in a two digit number`,()=>{
        assert.isTrue(d.isBothPrime(-33));
        assert.isTrue(d.isBothPrime(-37));
        assert.isTrue(d.isBothPrime(73));
        assert.isTrue(d.isBothPrime(23));
        assert.isTrue(d.isBothPrime(35));
    });
});

// Exercise 10
describe("Determine if 2 digits are the same from a 2 digit number",()=>{
   it(`it should return False if 2 digits are not the same from a 2 digit number`,()=>{
        assert.isFalse(d.isSameDigit(4050));
        assert.isFalse(d.isSameDigit(3));
        assert.isFalse(d.isSameDigit(333));
        assert.isFalse(d.isSameDigit(81));
        assert.isFalse(d.isSameDigit(-4050));
        assert.isFalse(d.isSameDigit(-22.5));
        assert.isFalse(d.isSameDigit(22.5));
        assert.isFalse(d.isSameDigit(-3));
        assert.isFalse(d.isSameDigit(-333));
        assert.isFalse(d.isSameDigit(-34));
        assert.isFalse(d.isSameDigit(65));
        assert.isFalse(d.isSameDigit(43));
        assert.isFalse(d.isSameDigit('hello'));
        assert.isFalse(d.isSameDigit(true));
        assert.isFalse(d.isSameDigit([5]));
    });
    it(`it should return True if 2 digits are the same from a 2 digit number`,()=>{
        assert.isTrue(d.isSameDigit(-88));
        assert.isTrue(d.isSameDigit(-55));
        assert.isTrue(d.isSameDigit(-11));
        assert.isTrue(d.isSameDigit(44));
        assert.isTrue(d.isSameDigit(33));
        assert.isTrue(d.isSameDigit(99));
    });
});
