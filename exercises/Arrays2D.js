

class Arrays2D{
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
        const isTwoPositiveDigits = n < 100 && n > 9;
        const isTwoNegativeDigits = n > -100 && n < -9; 
        return isTwoPositiveDigits || isTwoNegativeDigits;
    }
    isPair(n){
        const isDivisibleByTwo = n%2 == 0;
        return isDivisibleByTwo
    }
    isNotAnArray(arr){
        const isNotAnArray = !arr[0];
        if(isNotAnArray){
            throw new Error(`Please insert an array or add values to the array`);
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
            throw new Error ('Please enter an array of numbers only')
        }
    }
    // Exercise 1
    // Determine the position of the higest number on a 2D array
    highestNumber(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let acc = 0;
        let row = 0;
        let number = 0;
        let index = '';
        for(let rIndex in arr){
            row = arr[rIndex]
            for(let cIndex in row){
                number = row[cIndex];
                const isGreaterThanAccumulator = number > acc;
                if(isGreaterThanAccumulator){
                    acc = number;
                    index = `row= ${rIndex}, Column= ${cIndex}`
                }
            }
        }
        return {highest: acc, index}
    }
    // Exercise 2
    // Determine the position of the highest pair on a 2D array
    highestPair(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let acc = 0;
        let index = '';
        let row = 0 ;
        let number = 0;
        for(let rIndex in arr){
            row = arr[rIndex]
            for(let cIndex in row){
                number = row[cIndex];
                const isGreaterThanAccumulator = number > acc;
                if(isGreaterThanAccumulator && this.isPair(number)){
                    acc = number;
                    index = `row= ${rIndex}, Column= ${cIndex}`
                }
            }
        }
        return {highestNumber: acc, index}
    }
    // Exercise 3
    // Determine the position of the all pairs on a 2D array
    allPairs(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let row = 0;
        let number = 0;
        let index = '';
        for(let rIndex in arr){
            row = arr[rIndex]
            for(let cIndex in row){
                number = row[cIndex];
                if(this.isPair(number)){
                    index += `row: ${rIndex}, Column: ${cIndex}` + ';';
                }
            }
        }
        return index
    }
    // Exercise 4
    // Determine the position of the all prime on a 2D array
    allPrime(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let row = 0;
        let number = 0;
        let index = '';
        for(let rIndex in arr){
            row = arr[rIndex]
            for(let cIndex in row){
                number = row[cIndex];
                if(this.isPrime(number)){
                    index += `row: ${rIndex}, Column: ${cIndex}; `;
                }
            }
        }
        return index
    }
    // Exercise 5
    // Calculate the sum total of elements at each array and determine which array has the highest sum
    highestSum(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let index = 0;
        let totalSum = 0;
        let acc = 0;
        for(let i in arr){
            let arrs = arr[i]
            for(let n of arrs){
                totalSum += n;
            }
            if(totalSum > acc){
                acc = totalSum;
                index = Number(i);
            }
            totalSum = 0
        }
        return {
            Highest_Sum : acc,
            Index : index
        }
    }
    // Exercise 6
    // Calculate the average of the highest number in each row on a 2D array
    averageOfHighest(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let average = 0;
        let highestNumbers = 0;
        let acc = 0;
        for(let arrs of arr){
            for(let number of arrs){
                if(number > acc){
                    acc = number;
                }
            }
            highestNumbers += acc;
            acc = 0
        }
        average = highestNumbers / arr.length;
        return average;
    }
    // Exercise 7
    // Determine the position of numbers ended in 0
    lastIsZero(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let index = '';
        for(let i in arr){
            let arrs = arr[i];
            for(let j in arrs){
                let number = arrs[j];
                const numberEndsInZero = number%10 == 0;
                if(numberEndsInZero){
                    index += `Row: ${i}, Column: ${j}; `
                }
            }
        }
        return index;
    }
    // Exercise 8
    // Determine how many numbers end in 0
    howManyEndInZero(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let counter = 0;
        for(let i in arr){
            let arrs = arr[i];
            for(let j in arrs){
                let number = arrs[j];
                const numberEndsInZero = number%10 == 0;
                if(numberEndsInZero){
                    counter++
                }
            }
        }
        return counter;
    }
    // Exercise 9
    // Determine how many numbers are prime and end in 3
    primeAndThree(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let counter = 0;
        for(let i in arr){
            let arrs = arr[i];
            for(let j in arrs){
                let number = arrs[j];
                const NumberEndsInThree = number%10 == 3;
                if(this.isPrime(number) && NumberEndsInThree){
                    counter++
                }
            }
        }
        return counter;
    }
    // Exercise 10
    // Determine the index of the highest prime
    highestPrime(arr){
        this.isNotAnArray(arr);
        this.isNotA2DimensionalArray(arr);
        this.isNotA2DimensionalArrayOfNumbers(arr);
        let index = '';
        let acc = 0;
        for(let i in arr){
            let arrs = arr[i];
            for(let j in arrs){
                let number = arrs[j];
                const isGreaterThanAccumulator = number > acc;
                if(this.isPrime(number) && isGreaterThanAccumulator){
                    acc = number;
                    index = `Row= ${i}, Column= ${j}`
                    
                }
            }
        }
        return {highestPrime: acc, index};
    }
}

export default Arrays2D;
