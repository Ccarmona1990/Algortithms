import Arrays2D from '../src/Arrays2D.js';
import { assert, expect } from 'chai';

const a2D = new Arrays2D();
const arrTest1 = [[97,11,100,50,60,93],[5,100,8,5,100,3,44,93,14,22],[61,80,20,17,33,47,100],[100,11,97,43,10,10]] ;
const arrTest2 = [[11,101,5,50,60,93],[43,200,8,5,100,3,44,87,17,23],[61,80,5,20,17,33,47,200],[101,5,11,43,43,12,30]] ;
const emptyArr = [];
const strArr = ['john','mike','Alice','claire'];

// Exercise 1
describe("Determine the position of the higest number on a 2D array",()=>{
    it(`it should return the position of the highest number on the array`,()=>{
        expect(a2D.highestNumber(arrTest1).index).to.equal('row= 0, Column= 2');
        expect(a2D.highestNumber(arrTest2).index).to.equal('row= 1, Column= 1');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.highestNumber(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.highestNumber(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 2
describe("Determine the position of the highest pair on a 2D array",()=>{
    it(`it should return the position of the highest pair on the 2D array`,()=>{
        expect(a2D.highestPair(arrTest1).index).to.equal('row= 0, Column= 2');
        expect(a2D.highestPair(arrTest2).index).to.equal('row= 1, Column= 1');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.highestPair(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.highestPair(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 3
describe("Determine the position of the all pairs on a 2D array",()=>{
    it(`it should return the position of all pairs on a 2D array`,()=>{
        expect(a2D.allPairs(arrTest1)).to.equal('row: 0, Column: 2;row: 0, Column: 3;row: 0, Column: 4;row: 1, Column: 1;row: 1, Column: 2;row: 1, Column: 4;row: 1, Column: 6;row: 1, Column: 8;row: 1, Column: 9;row: 2, Column: 1;row: 2, Column: 2;row: 2, Column: 6;row: 3, Column: 0;row: 3, Column: 4;row: 3, Column: 5;');
        expect(a2D.allPairs(arrTest2)).to.equal('row: 0, Column: 3;row: 0, Column: 4;row: 1, Column: 1;row: 1, Column: 2;row: 1, Column: 4;row: 1, Column: 6;row: 2, Column: 1;row: 2, Column: 3;row: 2, Column: 7;row: 3, Column: 5;row: 3, Column: 6;');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.allPairs(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.allPairs(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 4
describe("Determine the position of the all prime on a 2D array",()=>{
    it(`it should return the position of all prime on a 2D array`,()=>{
        expect(a2D.allPrime(arrTest1)).to.equal('row: 0, Column: 0; row: 0, Column: 1; row: 1, Column: 0; row: 1, Column: 3; row: 1, Column: 5; row: 2, Column: 0; row: 2, Column: 3; row: 2, Column: 5; row: 3, Column: 1; row: 3, Column: 2; row: 3, Column: 3; ');
        expect(a2D.allPrime(arrTest2)).to.equal('row: 0, Column: 0; row: 0, Column: 1; row: 0, Column: 2; row: 1, Column: 0; row: 1, Column: 3; row: 1, Column: 5; row: 1, Column: 8; row: 1, Column: 9; row: 2, Column: 0; row: 2, Column: 2; row: 2, Column: 4; row: 2, Column: 6; row: 3, Column: 0; row: 3, Column: 1; row: 3, Column: 2; row: 3, Column: 3; row: 3, Column: 4; ');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.allPrime(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.allPrime(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 5
describe("Calculate the sum total of elements at each array and determine which array has the highest sum",()=>{
    it(`it should return which array has the highest sum`,()=>{
        expect(a2D.highestSum(arrTest1).Index).to.equal(0);
        expect(a2D.highestSum(arrTest2).Index).to.equal(1);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.highestSum(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.highestSum(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 6
describe("Calculate the average of the highest number in each row on a 2D array",()=>{
    it(`it should return the average of the highest number in each row on a 2D array`,()=>{
        expect(a2D.averageOfHighest(arrTest1)).to.equal(100);
        expect(a2D.averageOfHighest(arrTest2)).to.equal(150.5);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.averageOfHighest(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.averageOfHighest(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 7
describe("Determine the position of numbers ended in 0",()=>{
    it(`it should return the position of numbers ended in 0`,()=>{
        expect(a2D.lastIsZero(arrTest1)).to.equal('Row: 0, Column: 2; Row: 0, Column: 3; Row: 0, Column: 4; Row: 1, Column: 1; Row: 1, Column: 4; Row: 2, Column: 1; Row: 2, Column: 2; Row: 2, Column: 6; Row: 3, Column: 0; Row: 3, Column: 4; Row: 3, Column: 5; ');
        expect(a2D.lastIsZero(arrTest2)).to.equal('Row: 0, Column: 3; Row: 0, Column: 4; Row: 1, Column: 1; Row: 1, Column: 4; Row: 2, Column: 1; Row: 2, Column: 3; Row: 2, Column: 7; Row: 3, Column: 6; ');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.lastIsZero(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.lastIsZero(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 8
describe("Determine how many numbers end in 0",()=>{
    it(`it should return the amount of numbers that end in 0`,()=>{
        expect(a2D.howManyEndInZero(arrTest1)).to.equal(11);
        expect(a2D.howManyEndInZero(arrTest2)).to.equal(8);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.howManyEndInZero(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.howManyEndInZero(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 9
describe("Determine how many numbers are prime and end in 3",()=>{
    it(`it should return the amount of numbers that end are prime and end in 3`,()=>{
        expect(a2D.primeAndThree(arrTest1)).to.equal(2);
        expect(a2D.primeAndThree(arrTest2)).to.equal(5);
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.primeAndThree(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.primeAndThree(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});
// Exercise 10
describe("Determine the index of the highest prime",()=>{
    it(`it should return the amount of numbers that end are prime and end in 3`,()=>{
        expect(a2D.highestPrime(arrTest1).index).to.equal('Row= 0, Column= 0');
        expect(a2D.highestPrime(arrTest2).index).to.equal('Row= 0, Column= 1');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            a2D.primeAndThree(emptyArr);
        }).to.throw("Please insert an array or add values to the array");
        expect(()=>{
            a2D.primeAndThree(strArr);
        }).to.throw("Please enter an array of numbers only")
    })
});