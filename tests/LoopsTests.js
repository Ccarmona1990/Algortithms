import Loops from '../src/Loops.js';
import { assert, expect, should } from 'chai';

const l = new Loops();

// Exercise 1
describe("Shows all numbers comprehended between 1 and the number entered",()=>{
    it(`it should return a string of all numbers comprehended between 1 and n`,()=>{
        expect(l.allWithin(5)).to.equal('1 2 3 4 5');
        expect(l.allWithin(-6)).to.equal('-1 -2 -3 -4 -5 -6');
    });
    it(`It should throw an error`,()=>{
        expect(()=>{
            l.allWithin(5.5);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.allWithin(-25.1);
        }).to.throw("Please enter a number that is whole")
    })
});

// Exercise 2
describe("Shows all pair numbers comprehended between 1 and the number entered",()=>{
    it(`it should return a string of pair numbers`,()=>{
        expect(l.allPairsWithin(5)).to.equal('2 4');
        expect(l.allPairsWithin(-6)).to.equal('-2 -4 -6');
    });
    it(`It should return an error`,()=>{
        expect(()=>{
            l.allPairsWithin(5.5);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.allPairsWithin(-25.1);
        }).to.throw("Please enter a number that is whole")
    })
});

// Exercise 3
describe("Shows all divisor comprehended between 1 and the number entered",()=>{
    it(`it should return a string of all divisor comprehended between 1 and the number entered`,()=>{
        expect(l.allDivisor(8)).to.equal('1 2 4 8');
        expect(l.allDivisor(-6)).to.equal('-1 -2 -3 -6');
    });
    it(`It should return an error`,()=>{
        expect(()=>{
            l.allDivisor(5.5);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.allDivisor(-25.1);
        }).to.throw("Please enter a number that is whole")
    })
});

// Exercise 4
describe("Reads a 2 and 3 digit number.It goes over each digit and shows all whole numbers comprehended between 1 and the number entered",()=>{
    it(`it should return a string of all numbers comprehended between 1 and the number entered for each digit`,()=>{
        expect(l.allWithinEachDigit(25)).to.equal('1 2 3 4 5 // 1 2 //');
        expect(l.allWithinEachDigit(-32)).to.equal('-1 -2 // -1 -2 -3 //');
        expect(l.allWithinEachDigit(325)).to.equal('1 2 3 4 5 // 1 2 // 1 2 3 //');
        expect(l.allWithinEachDigit(-999)).to.equal('-1 -2 -3 -4 -5 -6 -7 -8 -9 // -1 -2 -3 -4 -5 -6 -7 -8 -9 // -1 -2 -3 -4 -5 -6 -7 -8 -9 //');
    });
    it(`It should return an error`,()=>{
        expect(()=>{
            l.allWithinEachDigit(5.5);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.allWithinEachDigit(-25.1);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.allWithinEachDigit(0);
        }).to.throw("Please enter a value greater than or lower than 0")
        expect(()=>{
            l.allWithinEachDigit(5555);
        }).to.throw("Please enter a 2 or 3 digit number")
    })
});

// Exercise 5
describe("A method that takes a 2 digit number and shows Shows all whole numbers which finish in 4 comprehended between 1 and the number entered",()=>{
    it(`it should return a string of all whole numbers which finish in 4 comprehended between 1 and the number entered`,()=>{
        expect(l.allFours(25)).to.equal('4 14 24');
        expect(l.allFours(-35)).to.equal('4 14 24 34');
    });
    it(`It should return an error`,()=>{
        expect(()=>{
            l.allFours(55.5);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.allFours(-25.1);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.allFours(0);
        }).to.throw("Please enter a value greater than or lower than 0")
        expect(()=>{
            l.allFours(5);
        }).to.throw("Please enter a 2 digit number")
        expect(()=>{
            l.allFours(123);
        }).to.throw("Please enter a 2 digit number")
    })
});

// Exercise 6
describe("shows all numbers comprehended between 20 and the 200",()=>{
    it(`it should return a string of all numbers comprehended between 20 and the 200`,()=>{
        expect(l.twentyTo200()).to.equal('20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100 102 104 106 108 110 112 114 116 118 120 122 124 126 128 130 132 134 136 138 140 142 144 146 148 150 152 154 156 158 160 162 164 166 168 170 172 174 176 178 180 182 184 186 188 190 192 194 196 198 200');
    });
});

// Exercise 7
describe("Shows all numbers that end in 6 comprehended between 25 and the 205",()=>{
    it(`it should return a string of all numbers that end in 6 comprehended between 25 and the 205`,()=>{
        expect(l.hasSix()).to.equal('26 36 46 56 66 76 86 96 106 116 126 136 146 156 166 176 186 196');
    });
});

// Exercise 8
describe("A method that takes a one digit number and shows the sum of all numbers comprehended between 1 and the number entered",()=>{
    it(`it should return the sum of allnumbers comprehended between 1 and the number entered`,()=>{
        expect(l.sumOfAllWithin(5)).to.equal(15);
        expect(l.sumOfAllWithin(-6)).to.equal(21);
    });
    it(`It should return an error`,()=>{
        expect(()=>{
            l.sumOfAllWithin(5.5);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.sumOfAllWithin(-5.1);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.sumOfAllWithin(0);
        }).to.throw("Please enter a value greater than or lower than 0")
        expect(()=>{
            l.sumOfAllWithin(5555);
        }).to.throw("Please enter a 1 digit number")
    })
});

// Exercise 9
describe("A method that takes a 2 digit number and shows all numbers comprehended between both of its digits",()=>{
    it(`it should return a string of all numbers comprehended between both of its digits`,()=>{
        expect(l.betweenDigits(91)).to.equal('1 2 3 4 5 6 7 8 9');
        expect(l.betweenDigits(-37)).to.equal('3 4 5 6 7');
        expect(l.betweenDigits(-55)).to.equal('Both digits are the same');
    });
    it(`It should return an error`,()=>{
        expect(()=>{
            l.betweenDigits(55.55);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.betweenDigits(-11.11);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.betweenDigits(0);
        }).to.throw("Please enter a value greater than or lower than 0")
        expect(()=>{
            l.betweenDigits(5555);
        }).to.throw("Please enter a 2 digit number")
        expect(()=>{
            l.betweenDigits(5);
        }).to.throw("Please enter a 2 digit number")
    })
});

// Exercise 10
describe("Determines if a number lower than four digit has the num 1",()=>{
    it(`it should return true if number contains 1`,()=>{
        assert.isTrue(l.hasOne(91));
        assert.isTrue(l.hasOne(-317));
        assert.isTrue(l.hasOne(120));
    });
    it(`it should return False if the number doesn't contain 1`,()=>{
        assert.isFalse(l.hasOne(222));
        assert.isFalse(l.hasOne(23));
        assert.isFalse(l.hasOne(-567));
    })
    it(`It should return an error`,()=>{
        expect(()=>{
            l.hasOne(55.55);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.hasOne(-11.11);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.hasOne(0);
        }).to.throw("Please enter a value greater than or lower than 0")
        expect(()=>{
            l.hasOne(5555);
        }).to.throw("Please enter a number with less than 4 digits")
    })
});

// Exercise 11
describe("Shows all the multiples of 5 comprehended between 1 and the given number",()=>{
    it(`it should return a string of all the multiples of 5 comprehended between 1 and the given number`,()=>{
        expect(l.multipleOfFive(55)).to.equal('5 10 15 20 25 30 35 40 45 50');
        expect(l.multipleOfFive(-37)).to.equal('5 10 15 20 25 30 35');
    });
    it(`It should return an error`,()=>{
        expect(()=>{
            l.betweenDigits(55.55);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.betweenDigits(-11.11);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.betweenDigits(0);
        }).to.throw("Please enter a value greater than or lower than 0")
    })
});

// Exercise 12
describe("Shows the first 20 multiples of 3",()=>{
    it(`it should return a string of the first 20 multiples of 3`,()=>{
        expect(l.multipleOfThree()).to.equal('3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60');
    });
});

// Exercise 13
describe("shows the sum total of the first 20 multiples of 3",()=>{
    it(`it should return the sum total of the first 20 multiples of 3`,()=>{
        expect(l.sumMultipleOfThree()).to.equal(630);
    });
});

// Exercise 14
describe("Shows the average between n given number of multiples of 3",()=>{
    it(`it should return the average between n given number of multiples of 3`,()=>{
        expect(l.averageOfThree(3)).to.equal(6);
        expect(l.averageOfThree(4)).to.equal(7.5);
    });
    it(`It should return an error`,()=>{
        expect(()=>{
            l.averageOfThree(55.55);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.averageOfThree(-4);
        }).to.throw("Please enter a positive number");
        expect(()=>{
            l.averageOfThree(0);
        }).to.throw("Please enter a value greater than or lower than 0")
    })
});

// Exercise 15
describe("shows the average of the first X number multiples of 2 and determine if the average is greater than the average of the first Y numbers multiples of 5",()=>{

    it(`it should return true if the average of 2 is greater than the average of 5`,()=>{
        assert.isTrue(l.isAverageOf2Greater(30,5));
        assert.isTrue(l.isAverageOf2Greater(50,9));
    });
    it(`it should return true if the average of 2 is greater than the average of 5`,()=>{
        assert.isFalse(l.isAverageOf2Greater(20,20));
        assert.isFalse(l.isAverageOf2Greater(50,50));
    });
    it(`It should return an error`,()=>{
        expect(()=>{
            l.isAverageOf2Greater(55.55,22);
        }).to.throw("Please enter a number that is whole");
        expect(()=>{
            l.isAverageOf2Greater(-4, 2.5);
        }).to.throw("Please enter a positive number");
        expect(()=>{
            l.isAverageOf2Greater(4, -2.5);
        }).to.throw("Please enter a positive number");
        expect(()=>{
            l.isAverageOf2Greater(0,0);
        }).to.throw("Please enter a value greater than or lower than 0")
        expect(()=>{
            l.isAverageOf2Greater(5,0);
        }).to.throw("Please enter a value greater than or lower than 0")
        expect(()=>{
            l.isAverageOf2Greater(0,5);
        }).to.throw("Please enter a value greater than or lower than 0")
    })
});

