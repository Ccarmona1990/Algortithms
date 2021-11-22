class Loops{
    isWhole(n){
        const isNotDivisibleByOne = n % 1 != 0;
        if(isNotDivisibleByOne){
            throw new Error(`Please enter a number that is whole`);
        }
    }
    checkIsNotZero(n){
        const isZero = n==0;
        if (isZero){
            throw new Error(`Please enter a value greater than or lower than 0`)
        }
    }
    checkIsPositive(n){
        const isNegative = n<0;
        if(isNegative){
            throw new Error('Please enter a positive number')
        }
    }
    checkIsTwoDigits(n){
        const isOneOrMoreThanTwoDigits= n < 9 || n > 100;
        if (isOneOrMoreThanTwoDigits){
            throw new Error(`Please enter a 2 digit number`);
        }
    }
    checkIsOneDigit(n){
        const isMoreThanOneDigit = n > 9 || n < -9;
        if(isMoreThanOneDigit){
            throw new Error(`Please enter a 1 digit number`);
        }
    }

    // Exercise 1
    // A method that shows all numbers comprehended between 1 and the number entered
    allWithin(n){
        this.isWhole(n);
        this.checkIsNotZero(n);
        let str = '';
        const isNegative = n<0;
        if(isNegative){
            for(let i=-1;i>=n;i--){
            str += i + " ";
        }
        }
        for(let i=1;i<=n;i++){
            str += i + " ";
        }
        return str.trim();
    }

    // Exercise 2
    // A method that shows all pair numbers comprehended between 1 and the number entered   
    allPairsWithin(n){
        this.isWhole(n);
        this.checkIsNotZero(n);
        let str = '';
        let i= 0;
        const isNegative = n<0;
        if(isNegative){
            for(i=-1;i>=n;i--){
                const isDivisibleByTwo = i%2==0;
                if(isDivisibleByTwo){
                    str += i +' ';
                }
        }
    }
        for(i=1;i<=n;i++){
            const isDivisibleByTwo = i%2==0;
            if(isDivisibleByTwo){
                str += i +' ';
            }
        }
        return str.trim();
    }
    
    // Exercise 3
    // A method that shows all divisor comprehended between 1 and the number entered   
    allDivisor(n){
        this.isWhole(n);
        this.checkIsNotZero(n);
        let str = ''
        const isNegative = n<0;
        if(isNegative){
            for(let i=-1;i>=n;i--){
                const NumisDivisibleByNumsWithin= n%i==0;
                if (NumisDivisibleByNumsWithin){
                str += i + " ";
            }
        }
    }
        for(let i=1;i<=n;i++){
            const NumisDivisibleByNumsWithin= n%i==0;
            if (NumisDivisibleByNumsWithin){
                str += i + " ";
            }
        }
        return str.trim();
    }

    /*
    ===================
    I stopped here. Continue here 
    ===================
    */

    // Exercise 4
    // A method that reads a 2 and 3 digit number. It goes over each digit and shows all isWhole numbers comprehended between 1 and the number entered  
    allWithinEachDigit(n){
        this.isWhole(n);
        this.checkIsNotZero(n);
        const numbersAreTwoOrThreeDigits = n < 1000 && n > 10 || n > -1000 && n < -10 ;
        if (numbersAreTwoOrThreeDigits){
            let currDigit;
            let str = ' ';
            while(n<-1){
                currDigit = n%10;
                n = Math.ceil(n/10);
                    for(let i=-1;i>=currDigit;i--){
                        str += i + " ";
                    }
                str +='// ';
            }
            while(n>1){
                currDigit = n%10;
                n = Math.floor(n/10);
                for(let i=1;i<=currDigit;i++){
                    str += i + " ";
                }
                str +='// '
            }
            return str.trim();
        }  else {
            throw new Error(`Please enter a 2 or 3 digit number`);
        } 
    }
    // Exercise 5
    // A method that takes a 2 digit number and shows all isWhole numbers which finish in 4 comprehended between 1 and the number entered  
    allFours(n){
        if(n<0){
            n *= -1
        }
        this.isWhole(n);
        this.checkIsNotZero(n);
        this.checkIsTwoDigits(n);  
        let str = '';
        for(let i=0;i<n;i++){
            if(i%10==4){
                str += i + " ";
            }
        }
        return str.trim();
    }

    // Exercise 6
    // A method that shows all numbers comprehended between 20 and the 200  
    twentyTo200(){
        let str = '';
        for(let i=20; i<=200;i+=2){
            str += i +" ";
        }
        return str.trim();
    }
    
    // Exercise 7
    // A method that shows all numbers that end in 6 comprehended between 25 and the 205
    hasSix(){
        let str ='';
        for(let i=25;i<205;i++){
            if(i%10==6){
                str += i +" ";
            }
        }
        return str.trim();
    }
    
    // Exercise 8
    // A method that takes a one digit number and shows the sum of numbers comprehended between 1 and the number entered   
    sumOfAllWithin(n){
        if(n<0){
            n *= -1
        }
        this.isWhole(n);
        this.checkIsOneDigit(n);
        this.checkIsNotZero(n);
        let total = 0;
        for(let i=0;i<=n;i++){
            total += i;
        }
        return total;
    }
    // Exercise 9 
    // A method that takes a 2 digit number and shows all numbers comprehended between one of its digits and another of its digits   
    betweenDigits(n){
        if(n<0){
            n *= -1;
        }
        this.isWhole(n);
        this.checkIsNotZero(n);
        this.checkIsTwoDigits(n);
        let firstDigit= ~~(n/10)
        let lastDigit= n%10;
        if (lastDigit<firstDigit){
            [lastDigit, firstDigit]=[firstDigit, lastDigit]
        } else if(lastDigit == firstDigit){
            return 'Both digits are the same';
        }
        let str = '';
        for(let i=firstDigit;i<=lastDigit;i++){
            str += i + " ";
        }
        return str.trim()
    }
    
    // Exercise 10
    // A method that determines if a number lower than four digit has the num 1      
    hasOne(n){
        if(n<0){
            n *= -1
        }
        this.isWhole(n);
        this.checkIsNotZero(n);
        if(n>1000){
            throw new Error(`Please enter a number with less than 4 digits`);
        }
        let digit = 0;
        while(n>1){
            digit = ~~(n%10);
            n/=10;
            if(digit == 1){
                console.log(`I'm the one`);
                return true;
            }
        }
        console.log(`I'm not the one`);
        return false
    }

    // Exercise 11
    // A method that shows all the multiples of 5 comprehended between 1 and the given number  
    multipleOfFive(n){
        if(n<0){
            n *= -1
        }
        this.isWhole(n);
        this.checkIsNotZero(n);
        let str = '';
        for(let i=1;i<n;i++){
            if(i%5==0){
                str += i + ' '; 
            }
        }
        return str.trim();
    }

    // Exercise 12
    // A method that shows the first 20 multiples of 3
    multipleOfThree(){
        let str = '';
        for(let i=1;i<=20;i++){
            str += (i*3) + ' ';
        }
        return str.trim();
    }

    // Exercise 13
    // A method that shows the sum total of the first 20 multiples of 3
    sumMultipleOfThree(){
        let total = 0;
        for(let i=1;i<=20;i++){
            total +=(i*3);
        }
        return total;
    }

    // Exercise 14
    // A method that shows the average between n given number of multiples of 3
    averageOfThree(n){
        this.checkIsPositive(n);
        this.isWhole(n);
        this.checkIsNotZero(n);
        let total = 0;
        let average = 0;
        for(let i=1;i<=n;i++){
            total +=(i*3);
        }
        average = total / n;
        return average;
    }

    // Exercise 15 
    // shows the average of the first X number multiples of 2 and determine if the average is greater than the average of the first Y numbers multiples of 5
    isAverageOf2Greater(x,y){
        this.checkIsPositive(x);
        this.checkIsPositive(y);
        this.isWhole(x);
        this.isWhole(y);
        this.checkIsNotZero(x);
        this.checkIsNotZero(y);
        let averageX=0;
        let averageY=0;
        let totalX=0;
        let totalY=0;
        for(let i=1;i<=x;i++){
            totalX += (i*2);
        }
        for(let j=1;j<=y;j++){
            totalY += (j*5);
        }
        averageX = totalX/x;
        averageY = totalY/y;
        return averageX>averageY;
    }
}

export default Loops;
