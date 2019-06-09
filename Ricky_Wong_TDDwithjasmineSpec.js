//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
// function Sum1toN(n){
//     var sum = 0;
//     for (var i = 0; i <= n; i ++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(Sum1toN(2));

// //return the sum of the first number in the array and the last number in the array
// function sumFirstLast(arr){
//     var x = arr[0];
//     var y = arr[arr.length - 1];
//     var sum = x + y;
//     return sum;
// }

// console.log(sumFirstLast([1,2]));
    
// describe("Sum1toN", function() { 
//     it("should return 3 when we pass 2 as an argument", function() { 
//         expect(Sum1toN(2)).toEqual(3); 
//     }); 
//     it("should return 6 when we pass 3 as an argument", function() { 
//         expect(Sum1toN(3)).toEqual(6); 
//     }); 
//     it("should return 10 when we pass 4 as an argument", function() { 
//         expect(Sum1toN(4)).toEqual(10); 
//     }); 
// });
    
// describe("sumFirstLast", function() { 
//     it("should return 3 when we pass [1,2] as an argument", function() { 
//         expect(sumFirstLast([1,2])).toEqual(3); 
//     }); 
//     it("should return 10 when we pass [2,3,8] as an argument", function() { 
//         expect(sumFirstLast([2,3,8])).toEqual(10); 
//     }); 
//     it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
//         expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
//     }); 
// });

// Own test function

function largestNum(n){
    // code here
    var max = n[0];
    for (var i = 0; i < n.length; i ++){
        if(n[i] > max){
            max = n[i];
        }
    }
    return max;
}
console.log(largestNum([1,2,3]));

// Test

describe("largestNum", function() {
    it("should return 3 when we pass [1,2,3] as an argument", function() {
        expect(largestNum([1,2,3])).toEqual(3);
    });
    it("should return 5 when we pass [3,1,5,2] as an argument", function(){
        expect(largestNum([3,1,5,2])).toEqual(5);
    });
    it("should return 15 when we pass[4,6,12,15,10,3] as an argument", function(){
        expect(largestNum([4,6,12,15,10,3])).toEqual(15);
    });
});