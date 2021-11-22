
class Decisions{
    isWhole(n){
        const isDivisibleByOne = n % 1 === 0;
        return isDivisibleByOne;
    }
    isPrime(n){
        const isNumberOne = n == 1;
        const isNumberNegativeOne = n == 1;
    if (isNumberOne || isNumberNegativeOne){
        return false;
    }

    for (let i = 2; i < n; i++){
        const isDivisibleByOtherNumbers = n % i == 0;
        if (isDivisibleByOtherNumbers){
            return false;
        }
    }
    for (let j = -2; j > n; j--){
        const isDivisibleByOtherNumbers = n % j == 0;
        if (isDivisibleByOtherNumbers){
            return false;
        }
    }
    return typeof(n) == 'number';
    }
    isTwoDigits(n){
        const isTwoPositiveDigits = (n < 100 && n > 9);
        const isTwoNegativeDigits = (n > -100 && n < -9) ;
        return isTwoPositiveDigits || isTwoNegativeDigits;
    }

    // Exercise 1
    // A method to determine if the last digit of a number is equal to 4
    isLastDigitFour (n){
        if(this.isWhole(n)){
            const lastDigitIsFour = n % 10 === 4 || n % 10 === -4;
            return lastDigitIsFour;
        } else {
            return false;
        }
}
    // Exercise 2
    // A method to determine if a number is isWhole and has 3 digits 
    isTripleDigits(n){
        if(this.isWhole(n)){
            const hasThreeDigits = (n < 1000 && n > 99) || (n > -1000 && n < -99);
            return hasThreeDigits;
        }else {
            return false;
        }
}
    // Exercise 3
    // A method to determine if a number is both  are Whole and Negative
    isNegative(n){
        if(this.isWhole(n)){
            const isNegative = n < 0;
            return isNegative;
        } else{
            return false;
        }
}
    // Exercise 4
    // A method to determine the sum of its two digits
    wholeSum(n){
        if (this.isWhole(n) && this.isTwoDigits(n)) {
            const firstDigit = ~~(n / 10);
            const lastDigit = (n % 10);
            return ~~(firstDigit + lastDigit);
        } else{
            return false;
        }

}
    // Exercise 5
    // A method to determine if both digits are pair from a 2 digit number
    isPair(n){
        if(this.isWhole(n) && this.isTwoDigits(n) ){
            const firstDigit = ~~(n / 10);
            const secondDigit = (n % 10);
            const firstDigitIsPair = firstDigit % 2 === 0;
            const secondDigitIsPair = secondDigit % 2 === 0;
            const bothPair = firstDigitIsPair && secondDigitIsPair;
            return bothPair; 
        } else{
            return false;
        }
}
    // Exercise 6
    // A method to determine which 2 digits numbers are isPrime below 20
    isPrimeBetween10and20(n){
        if(this.isWhole(n) && this.isPrime(n)){
            const between10and20 = (n > -20 && n < -9) || (n < 20 && n > 9) ;
            return between10and20;
        } else {
            return false;
        }
}
    // Exercise 7
    // A method to determine if a 2 digit number is both isPrime and isNegative
    isPrimeNegative(n) {
        if(this.isWhole(n) && this.isPrime(n)){
            const hasTwoNegativeDigits = n < -9 && n > -100;
            return hasTwoNegativeDigits;
        } else{
            return false;
        }
}
    // Exercise 8
    // A method to determine if both numbers are multiple of each other
    isMultiplicable(n){
        if(this.isWhole(n) && this.isTwoDigits(n)){
            const firstDigit = ~~(n / 10);
            const secondDigit = (n % 10);
            const isFirstDigitMultipleOfSecondDigit = (firstDigit % secondDigit) == 0;
            const isSecondDigitMultipleOfFirstDigit = (secondDigit % firstDigit) == 0;
            const multiple = isFirstDigitMultipleOfSecondDigit || isSecondDigitMultipleOfFirstDigit;
            return multiple;
        } else {
            return false;
        }
}
    // Exercise 9
    // A method to determine both numbers are isPrime in a two digit number
    isBothPrime(n){
        if(this.isWhole(n) && this.isTwoDigits(n)){
            const firstDigit = ~~(n / 10);
            const secondDigit = (n % 10);
            const bothPrime = this.isPrime(firstDigit) && this.isPrime(secondDigit);
            return bothPrime;
        } else {
            return false;
        }
}
    // Exercise 10
    // A method to determine if 2 digits are the same from a 2 digit number
    isSameDigit(n){
        if(this.isWhole(n) && this.isTwoDigits(n)){
            const firstDigit = ~~(n / 10);
            const secondDigit = (n % 10);
            const sameDigit = firstDigit - secondDigit == 0;
            return sameDigit;
        } else {
            return false;
        }
}
};

export default Decisions;
