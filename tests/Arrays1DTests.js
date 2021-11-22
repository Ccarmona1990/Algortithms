import Arrays1D from '../src/Arrays1D.js';
import { assert, expect } from 'chai';

const a1D = new Arrays1D();
const arrTest1 = [97,11,100,50,60,93,5,100,8,5,100,3,44,93,14,22] ;
const arrTest2 = [43,200,7,55,80,43,3,200,6,9,100,17,44,43,15,24] ;
const emptyArr = [];
const strArr = ['john','mike','Alice','claire'];

// Exercise 1
describe("Determine the position of the highest number on the array",()=>{
    it(`it should return the position of the highest number on the array`,()=>{
        expect(a1D.highestNumber(arrTest1).index).to.equal(2);
        expect(a1D.highestNumber(arrTest2).index).to.equal(1);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a1D.highestNumber(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a1D.highestNumber(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 2
describe("Determine the position of the highest pair on the array",()=>{
    it(`it should return the position of the highest pair on the array`,()=>{
        expect(a1D.highestPair(arrTest1).index).to.equal(2);
        expect(a1D.highestPair(arrTest2).index).to.equal(1);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a1D.highestPair(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a1D.highestPair(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 3
describe("Determine the position of the highest prime on the array",()=>{
    it(`it should return the position of the highest prime on the array`,()=>{
        expect(a1D.highestPrime(arrTest1).index).to.equal(0);
        expect(a1D.highestPrime(arrTest2).index).to.equal(0);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a1D.highestPrime(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a1D.highestPrime(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 4
describe("Show the first 10 element from the fibonacci serie",()=>{
    it(`it should show the first 10 element from the fibonacci serie`,()=>{
        expect(a1D.showFibonacciSerie()).to.equal(`0,1,1,2,3,5,8,13,21,34`);
    });
});
// Exercise 5
describe("Shows an array of the first 10 prime numbers comprehended between 100 and 300",()=>{
    it(`it should Show an array of the first 10 prime numbers comprehended between 100 and 300`,()=>{
        expect(a1D.primes100to300()).to.equal(`101,103,107,109,113,127,131,137,139,149`);
    });
});
// Exercise 6
describe("Read 2 whole numbers and add to an array all prime numbers between the lowest and the highest",()=>{
    it(`it should return the position of the highest prime on the array`,()=>{
        expect(a1D.primesNtoN(1,20)).to.equal('2,3,5,7,11,13,17,19');
        expect(a1D.primesNtoN(20,1)).to.equal('2,3,5,7,11,13,17,19');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a1D.primesNtoN(20,-1);
        }).to.throw('Please make sure both numbers are either positive or Negative');
        expect(()=>{
            a1D.primesNtoN(-20,1);
        }).to.throw('Please make sure both numbers are either positive or Negative');
        expect(()=>{
            a1D.primesNtoN('20',1);
        }).to.throw('Please enter a number');
        expect(()=>{
            a1D.primesNtoN(20,'1');
        }).to.throw('Please enter a number');
    })
});
// Exercise 7
describe("Determine in which position are the numbers that end in 4",()=>{
    it(`it should return the position of the numbers that end in 4`,()=>{
        expect(a1D.lastIsFour(arrTest1)[0].index).to.equal(12);
        expect(a1D.lastIsFour(arrTest1)[1].index).to.equal(14);
        expect(a1D.lastIsFour(arrTest2)[0].index).to.equal(12);
        expect(a1D.lastIsFour(arrTest2)[1].index).to.equal(15);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a1D.lastIsFour(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a1D.lastIsFour(strArr);
        }).to.throw("Please enter an array of numbers only");
    })
});
// Exercise 8
describe("Determine how many times the highest number is repeated",()=>{
    it(`it should return the number of times the highest number is repeated`,()=>{
        expect(a1D.highestIsRepeated(arrTest1)).to.equal(3);
        expect(a1D.highestIsRepeated(arrTest2)).to.equal(2);
        expect(a1D.highestIsRepeated([1,2,3,4,5])).to.equal('Highest is not repeated');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a1D.highestIsRepeated(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a1D.highestIsRepeated(strArr);
        }).to.throw("Please enter an array of numbers only");
    })
});
// Exercise 9
describe("Determine the position of numbers that contains 3 digits",()=>{
    it(`it should return the position of numbers that contain 3 digits`,()=>{
        expect(a1D.threeDigitsAreAt(arrTest1)).to.equal('2 7 10');
        expect(a1D.threeDigitsAreAt(arrTest2)).to.equal('1 7 10');

    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a1D.threeDigitsAreAt(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a1D.threeDigitsAreAt(strArr);
        }).to.throw("Please enter an array of numbers only");
    })
});
// Exercise 10
describe("Determine how many numbers on the array are less than 3 digits",()=>{
    it(`it should return the number of numbers on the array that are less than 3 digits`,()=>{
        expect(a1D.lessThanThreeDigits(arrTest1)).to.equal(13);
        expect(a1D.lessThanThreeDigits(arrTest2)).to.equal(13);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a1D.lessThanThreeDigits(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a1D.lessThanThreeDigits(strArr);
        }).to.throw("Please enter an array of numbers only");
    })
});