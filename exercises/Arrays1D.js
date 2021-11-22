
class Arrays1D{
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
    if (n > 2){
        for (let i = 2; i < n; i++){
            const isDivisibleByOtherNumbers = n % i == 0;
            if (isDivisibleByOtherNumbers){
                return false;
            }
        }
    }
    if (n < -2){
        for (let j = -2; j > n; j--){
            const isDivisibleByOtherNumbers = n % j == 0;
            if (isDivisibleByOtherNumbers){
                return false;
            }
        }
    }
    return typeof(n) == 'number';
    }
    isTwoDigits(n){
        const isTwoPositiveDigits = n < 100 && n > 9;
        const isTwoNegativeDigits = n > -100 && n < -9; 
        return isTwoPositiveDigits || isTwoNegativeDigits;
    }
    isPair(n){
        const isDivisibleByTwo = n % 2 === 0;
        return isDivisibleByTwo
    }
    isNotAnArray(arr){
        const isNotAnArray = !arr[0];
        if(isNotAnArray){
            throw new Error(`Please insert an array or add values to the array`);
        }
    }
    isNotAnArrayOfNumbers(arr){
        if(typeof(arr[0]) !== 'number'){
            throw new Error ('Please enter an array of numbers only')
        }
    }

    // Exercise 1
    // Determine the position of the highest number on an array
    highestNumber(arr){
        this.isNotAnArray(arr);
        this.isNotAnArrayOfNumbers(arr);
        let acc = 1;
        let indx = 0;
        for(let i in arr){
            let number = arr[i]; 
            const isHighest = number > acc;
            if(isHighest){
                acc = number;
                indx = Number(i);
            }
        }
        return {
            number: acc,
            index: indx
        }
    }
    // Exercise 2
    // Determine the position of the highest pair on an array
    highestPair(arr){
        this.isNotAnArray(arr);
        this.isNotAnArrayOfNumbers(arr);
        let acc = 1;
        let index = 0;
        for(let i in arr){
            let number =arr[i]
            const isHighest = number > acc;
            const isPair = number%2==0
            if(isHighest && isPair){
                acc = number;
                index = Number(i);
            }
        }
        return {
            value: acc,
            index: index
        }
    }
    // Exercise 3
    // Determine the position of the highest prime number on an array
    highestPrime(arr){
        this.isNotAnArray(arr);
        this.isNotAnArrayOfNumbers(arr);
        let acc = 1;
        let index = 0;
        for(let i in arr){
            let number = arr[i];
            const isHighest = number > acc;
            if(isHighest && this.isPrime(number)){
                acc = number;
                index = Number(i);
            }
        }
        return {
            value: acc,
            index: index
        }
    }
    // Exercise 4
    // Place in an array the first 10 element from the fibonacci serie
    showFibonacciSerie(){
        let arr = [];
        let temp1 = 1;
        let temp2;
        let f = 0;
        for(let i = 0;i<10;i++){
            temp2 = f;
            f += temp1 ;
            temp1 = temp2;
            arr.push(temp1);
        }
        return `${arr}`;
    }
    // Exercise 5
    // Create an array of 10 prime number comprehended between 100 and 300
    primes100to300(){
        let arr = [];
        for(let i =100; i<300;i++){
            const numberOfItemsToAdd= arr.length<10;
            if(this.isPrime(i)&& numberOfItemsToAdd){
                arr.push(i)
            }
        }
        return `${arr}`;
    }
    // Exercise 6
    // Read 2 whole numbers and add to an array all prime numbers between the lowest and the highest
    primesNtoN(n1,n2){
        const eitherIsNegative = (n1 < 0 && n2 > 0) || (n2 < 0 && n1 > 0);
        if(eitherIsNegative){
            throw new Error('Please make sure both numbers are either positive or Negative')
        }
        const isNotANumber = typeof(n1) !== 'number' || typeof(n2) !== 'number';
        if(isNotANumber){
            throw new Error ('Please enter a number')
        }
        if (n1>n2){
            [n2,n1]=[n1,n2]
        }
        let arr = [];
        for(let i=n1;i<n2;i++){
            const numberOfItemsToAdd= arr.length<10;
            if(this.isPrime(i) && numberOfItemsToAdd){
                arr.push(i)
            }
        }
        return `${arr}`;
    }
    // Exercise 7
    // Determine in which position are the numbers that end in 4
    lastIsFour(arr){
        this.isNotAnArray(arr);
        this.isNotAnArrayOfNumbers(arr);
        let objArr = []
        for(let index in arr){
            let number = arr[index]
            const remainderIsFour = number%10==4;
            if(remainderIsFour){
                objArr.push({
                    number: number,
                    index: Number(index)
                })
            }        
        }
        return objArr
    }
    // Exercise 8
    // Determine how many times the highest number is repeated
    highestIsRepeated(arr){
        this.isNotAnArray(arr);
        this.isNotAnArrayOfNumbers(arr);
        let counter = 0;
        let acc = 1;
        let obj = {};
        for(let i in arr){
            let number = arr[i];
            const isHighest = number>=acc;
            if(isHighest){
                acc = number;
                if(!obj[acc]){
                    obj[acc] = 1
                } else {
                    obj[acc] += 1
                }
            }
        }
        for (let value in obj){
            let key = obj[value]
            if (key > counter){
                counter = key
            }
        }
        //console.log(acc);
        return counter == 1? 'Highest is not repeated': counter;
    }
    // Exercise 9
    // Determine the position of numbers that contains 3 digits
    threeDigitsAreAt(arr){
        this.isNotAnArray(arr);
        this.isNotAnArrayOfNumbers(arr);
        let objArr = [];
        let str = '';
        for(let index in arr){
            let number = arr[index];
            const hasThreeDigits = number > 99 && number < 1000 || number < -99 && number > -1000 ;
            if(hasThreeDigits){
                objArr.push({
                    Number: number,
                    Index: Number(index)
                })
            }
        }
        for (let i in objArr){
            let obj = objArr[i];
            for (let j in obj){
                let value = obj[j];
                if(j == 'Index'){
                    //console.log(value);
                    str += value + ' '
                }
            }
        }
        //objArr
        return str.trim()
    }
    // Exercise 10
    // Determine how many numbers on the array are less than 3 digits
    lessThanThreeDigits(arr){
        this.isNotAnArray(arr);
        this.isNotAnArrayOfNumbers(arr);
        let counter = 0;
        for(let indx in arr){
            let number = arr[indx];
            const hasLessThanThreeDigits = number > -100 && number < 100;
            if(hasLessThanThreeDigits){
                counter++
            }
        }
        return counter;
    }
}

export default Arrays1D;