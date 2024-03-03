// var createCounter = function(n) {
//     let count = n;

//     return function() {
//         return count++;
//     };
// };

function counter(n) {
  return function () {
    return n++;
  };
}

const counted = counter(10); // a value isneeded to be passed at first before we start callin the function multiole times

console.log(counted()); // 10
console.log(counted()); // 11
git 