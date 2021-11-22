
class Functions {

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
    isNotPositive(n){
        const isNegative = n<0;
        if(isNegative){
            throw new Error('Please enter a positive number')
        }
    }
    isNotANumber(n){
        if (typeof(n) !== 'number'){
            throw new Error('Please enter a number')
        }
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
    isNotA2DimensionalArray(arr){
        const isNotA2DimensionalArray = arr[[]] == false;
        if(isNotA2DimensionalArray){
            throw new Error ('Please insert a matrix / 2 dimensional Array');
        }
        this.isNotA2DimensionalArrayOfNumbers(arr);
    }
    isNotA2DimensionalArrayOfNumbers(arr){
        if(typeof(arr[0][0]) !== 'number'){
            throw new Error ('Please enter a 2D array of numbers only')
        }
    }
    
    //Exercise 1
    // Create a function that takes an array and a number and return the number of times that a number ends in that number
    howManyTimesLastIsN (arr, num){
        this.isNotAnArray(arr);
        this.isNotAnArrayOfNumbers(arr);
        this.isNotANumber(num);
        this.isNotPositive(num);
        let counter = 0;
        for(let i in arr){
            let number = arr[i];
            let endsInNum = number % 10 == num; 
            if (endsInNum){
                counter++;
            }
        }
        return counter
    }
    //Exercise 2
    // Create a function that takes a 2D array and a number and returns the number of times a number has that digit located before last 
    howManyTimesBeforeLastIsN (arr, num){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotANumber(num);
        this.isNotPositive(num);
        let counter = 0;
        for(let i in arr){
            let arrs = arr[i];
            for(let number of arrs){
                const isMoreThanTwoDigits = number > 99;
                let secondDigit = ~~((number % 100) /10) 
                let endsInNum = secondDigit == num;
                //console.log(number);
                if (endsInNum && isMoreThanTwoDigits){
                    counter++;
                }
            }
        }
        return counter
    }

    //Exercise 3
    // Create a function that takes a 2D array and returns the number of times the highest number on the array repeats itself
    howMuchisHighestRepeated(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        let acc = 0;
        let counter = 0;
        for(let i of arr){
            for(let j of i){
                let highestNumber = j > acc;
                if (j == acc){
                    counter++
                } 
                if(highestNumber){
                    acc = j;
                }
            }
        }
        return counter == 0 ? 'Highest is not repeated' : counter
    }
    //Exercise 4
    // Create a function that takes a 2D array and returns how many numbers are prime on the array
    howManyArePrime(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        let counter = 0;
        for(let i of arr){
            for(let j of i){
                if(this.isPrime(j)){
                    counter++
                }
            }
        }
        return counter
    }
    //Exercise 5
    // Create a function that takes a 2D array and returns how many time is the highest prime repeated on the array
    howMuchIsHighestPrimeRepeated(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        let acc = 0;
        let counter = 0;
        for(let i of arr){
            for(let j of i){
                let highestNumber = j > acc;
                if (j == acc){
                    counter++
                } 
                if(highestNumber && this.isPrime(j)){
                    acc = j;
                }
            }
        }
        return counter == 0 ? 'Highest is not repeated' : counter
    }
    // Exercise 6
    // Create a function that takes a 2D array and a number and returns how many times is n repeated
    howMuchIsNRepeated(arr,n){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotANumber(n);
        this.isNotPositive(n);
        let counter = 0;
        for(let i of arr){
            for(let j of i){
                if (j == n){
                    counter++
                } 
            }
        }
        return counter == 0 ? `${n} is not on the array` : counter
    }
    //Exercise 7
    // Create a function that takes a 2D array and returns the row index of the first instance of the highest number on the array 
    highestIsAtRow(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        let acc = 0;
        let index = 0;
        for(let rIndex in arr){
            let arrs = arr[rIndex]
            for(let cIndex of arrs){
                let highestNumber = acc < cIndex && acc != cIndex ;
                if(highestNumber){
                    acc = cIndex;
                    index = Number(rIndex)
                } 
            }
        }
        return {Max: acc, index}
    }
    //Exercise 8
    // Create a function that takes a 2D array and returns the column index of the first instance of the highest number on the array 
    highestIsAtColumn(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        let acc = 0;
        let row = 0;
        let column = 0;
        for(let rIndex in arr){
            let arrs = arr[rIndex]
            for(let cIndex in arrs){
                let number = arrs[cIndex];
                let highestNumber = acc < number && acc != number ;
                if(highestNumber){
                    acc = number;
                    row = Number(rIndex)
                    column = Number(cIndex)
                } 
            }
        }
        return {Max: acc, rIndex: row, cIndex: column}
    }
    //Exercise 9
    // Create a function that takes a 2D array and returns the exact position where the highest prime is located at
    highestPrimeIsAt(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        let acc = 0;
        let row = 0;
        let column = 0;
        for(let rIndex in arr){
            let arrs = arr[rIndex]
            for(let cIndex in arrs){
                let number = arrs[cIndex];
                let highestNumber = acc < number && acc != number ;
                if(highestNumber && this.isPrime(number)){
                    acc = number;
                    row = rIndex
                    column = cIndex
                } 
            }
        }
        return {Max: acc, index: `Row= ${row}, Column= ${column}`}
    }
    // Exercise 10
    // Create a function that takes a 2D array and returns its mode
    theModeIs(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        let obj = {};
        let acc = 0;
        let counter = 0;
        for(let i of arr){
            for(let j of i){
                if (!obj[j]){
                    obj[j] = 1
                } else {
                    obj[j] += 1
                }
            }
        }
        for (let value in obj){
            let key = obj[value]
            if (key > acc){
                acc = Number(value)
                counter = key
            }
        }
        return {the_mode: acc, isRepeated: counter}
    }
}

export default Functions;
