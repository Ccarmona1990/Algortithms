import Function from '../src/Functions.js';
import { assert, expect } from 'chai';

const f = new Function();
const arrTest1 = [97,11,100,50,60,93,5,100,8,5,100,3,44,93,14,22] ;
const arrTest2 = [43,200,7,55,80,153,43,3,200,6,9,100,17,44,43,15,24] ;
const arrTest3 = [[97,11,100,50,60,93],[5,100,8,5,100,3,44,93,14,22],[61,80,20,17,33,47,100],[100,11,97,43,10,10]] ;
const arrTest4 = [[11,101,5,153,50,60,93],[43,200,8,5,100,3,44,150,87,17,23],[61,80,5,20,151,17,33,47,200],[151,5,11,43,43,12,30]] ;
const emptyArr = [];
const strArr = ['john','mike','Alice','claire'];
const str2DArr = [['john'],['mike'],['Alice'],['claire']];


// Exercise 1
describe("Create a function that takes an array and a number and return the number of times that a number ends in that number",()=>{
    it(`it should return the number of times that a number ends in that number`,()=>{
        expect(f.howManyTimesLastIsN(arrTest1,1)).to.equal(1);
        expect(f.howManyTimesLastIsN(arrTest2,5)).to.equal(2);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.howManyTimesLastIsN(emptyArr,1);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.howManyTimesLastIsN(strArr,1);
        }).to.throw("Please enter an array of numbers only")
        expect(()=>{
            f.howManyTimesLastIsN(arrTest2,-1);
        }).to.throw("Please enter a positive number")
        expect(()=>{
            f.howManyTimesLastIsN(arrTest2,'1');
        }).to.throw("Please enter a number")
        expect(()=>{
            f.howManyTimesLastIsN(arrTest2);
        }).to.throw("Please enter a number")
    })
});
// Exercise 2
describe("Create a function that takes a 2D array and a number and returns the number of times N is the digit located before last",()=>{
    it(`it should return the number of times a number has that digit located before last`,()=>{
        expect(f.howManyTimesBeforeLastIsN(arrTest3,0)).to.equal(5);
        expect(f.howManyTimesBeforeLastIsN(arrTest4,5)).to.equal(4);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.howManyTimesBeforeLastIsN(arrTest2,0);
        }).to.throw("Please insert a matrix / 2 dimensional Array");
        expect(()=>{
            f.howManyTimesBeforeLastIsN(emptyArr,5);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.howManyTimesBeforeLastIsN(strArr,5);
        }).to.throw("Please enter a 2D array of numbers only")
        expect(()=>{
            f.howManyTimesBeforeLastIsN(arrTest3,-1);
        }).to.throw("Please enter a positive number")
        expect(()=>{
            f.howManyTimesBeforeLastIsN(arrTest3,'1');
        }).to.throw("Please enter a number")
        expect(()=>{
            f.howManyTimesBeforeLastIsN(arrTest3);
        }).to.throw("Please enter a number")
    })
});
// Exercise 3
describe("Create a function that takes a 2D array and returns the number of times the highest number on a 2D array repeats itself",()=>{
    it(`it should return the number of times the highest number on the array repeats itself`,()=>{
        expect(f.howMuchisHighestRepeated(arrTest3)).to.equal(4);
        expect(f.howMuchisHighestRepeated(arrTest4)).to.equal(1);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.howMuchisHighestRepeated(arrTest2);
        }).to.throw("Please insert a matrix / 2 dimensional Array");
        expect(()=>{
            f.howMuchisHighestRepeated(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.howMuchisHighestRepeated(str2DArr);
        }).to.throw("Please enter a 2D array of numbers only")
    })
});
// Exercise 4
describe("Create a function that takes a 2D array and returns how many numbers are prime on the array",()=>{
    it(`it should return how many numbers are prime on the array`,()=>{
        expect(f.howManyArePrime(arrTest3)).to.equal(11);
        expect(f.howManyArePrime(arrTest4)).to.equal(18);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.howManyArePrime(arrTest2);
        }).to.throw("Please insert a matrix / 2 dimensional Array");
        expect(()=>{
            f.howManyArePrime(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.howManyArePrime(str2DArr);
        }).to.throw("Please enter a 2D array of numbers only")
    })
});
// Exercise 5
describe("Create a function that takes a 2D array and returns how many time is the highest prime repeated on the array",()=>{
    it(`it should return how many time is the highest prime repeated on the array`,()=>{
        expect(f.howMuchIsHighestPrimeRepeated(arrTest3)).to.equal(1);
        expect(f.howMuchIsHighestPrimeRepeated(arrTest4)).to.equal(1);
        expect(f.howMuchIsHighestPrimeRepeated([[11,101,5,153,50,60,93],[43,200,8,5,100,3,44,150,87,17,23],[61,80,5,20,151,17,33,47,200],[15,5,11,43,43,12,30]])).to.equal('Highest is not repeated');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.howMuchIsHighestPrimeRepeated(arrTest2);
        }).to.throw("Please insert a matrix / 2 dimensional Array");
        expect(()=>{
            f.howMuchIsHighestPrimeRepeated(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.howMuchIsHighestPrimeRepeated(str2DArr);
        }).to.throw("Please enter a 2D array of numbers only")
    })
});
// Exercise 6
describe("Create a function that takes a 2D array and a number and returns how many times is n repeated",()=>{
    it(`it should return the number of times n is repeated`,()=>{
        expect(f.howMuchIsNRepeated(arrTest3,5)).to.equal(2);
        expect(f.howMuchIsNRepeated(arrTest4,5)).to.equal(4);
        expect(f.howMuchIsNRepeated(arrTest4,1)).to.equal('1 is not on the array');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.howMuchIsNRepeated(arrTest2,5);
        }).to.throw("Please insert a matrix / 2 dimensional Array");
        expect(()=>{
            f.howMuchIsNRepeated(emptyArr,5);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.howMuchIsNRepeated(str2DArr,5);
        }).to.throw("Please enter a 2D array of numbers only")
        expect(()=>{
            f.howMuchIsNRepeated(arrTest3,-1);
        }).to.throw("Please enter a positive number")
        expect(()=>{
            f.howMuchIsNRepeated(arrTest3,'5');
        }).to.throw("Please enter a number")
        expect(()=>{
            f.howMuchIsNRepeated(arrTest3);
        }).to.throw("Please enter a number")
    })
});
// Exercise 7
describe("Create a function that takes a 2D array and returns the row index of the first instance of the highest number on the array",()=>{
    it(`it should return the row index of the first instance of the highest number on the array`,()=>{
        expect(f.highestIsAtRow(arrTest3).index).to.equal(0);
        expect(f.highestIsAtRow(arrTest4).index).to.equal(1);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.highestIsAtRow(arrTest2);
        }).to.throw("Please insert a matrix / 2 dimensional Array");
        expect(()=>{
            f.highestIsAtRow(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.highestIsAtRow(str2DArr);
        }).to.throw("Please enter a 2D array of numbers only")
    })
});
// Exercise 8
describe("Create a function that takes a 2D array and returns the column index of the first instance of the highest number on the array ",()=>{
    it(`it should return the column index of the first instance of the highest number on the array`,()=>{
        expect(f.highestIsAtColumn(arrTest3).cIndex).to.equal(2);
        expect(f.highestIsAtColumn(arrTest4).cIndex).to.equal(1);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.highestIsAtColumn(arrTest2);
        }).to.throw("Please insert a matrix / 2 dimensional Array");
        expect(()=>{
            f.highestIsAtColumn(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.highestIsAtColumn(str2DArr);
        }).to.throw("Please enter a 2D array of numbers only")
    })
});
// Exercise 9
describe("Create a function that takes a 2D array and returns the exact position where the highest prime is located at",()=>{
    it(`it should return the exact position where the highest prime is located at`,()=>{
        expect(f.highestPrimeIsAt(arrTest3).index).to.equal('Row= 0, Column= 0');
        expect(f.highestPrimeIsAt(arrTest4).index).to.equal('Row= 2, Column= 4');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.highestPrimeIsAt(arrTest2);
        }).to.throw("Please insert a matrix / 2 dimensional Array");
        expect(()=>{
            f.highestPrimeIsAt(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.highestPrimeIsAt(str2DArr);
        }).to.throw("Please enter a 2D array of numbers only")
    })
});
// Exercise 10
describe("Create a function that takes a 2D array and returns its mode",()=>{
    it(`it should return its mode`,()=>{
        expect(f.theModeIs(arrTest3).the_mode).to.equal(100);
        expect(f.theModeIs(arrTest4).the_mode).to.equal(5);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            f.theModeIs(arrTest2);
        }).to.throw("Please insert a matrix / 2 dimensional Array");
        expect(()=>{
            f.theModeIs(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            f.theModeIs(str2DArr);
        }).to.throw("Please enter a 2D array of numbers only")
    })
});