// exo 1

// const countWords=(str)=>{
//     const arr = str.split(' '); 

//     return arr.filter(word => word !== '').length;
// }

// console.log(countWords('One two three')); //  3
// console.log(countWords('This   is   a long string')); //  5

//exo 2

// const nombre=(a)=>{
//     if( 10 > a)
// {
//     alert("Plus grand !");
// }

// if( 20 < a)
// {
//     alert("Plus petit !");
// }
// }
// //console.log(nombre(5));
// console.log(nombre(25));

//exo 3

// const permutator = (inputArr) => {
//     let result = [];
  
//     const permute = (arr, m = []) => {
//       if (arr.length === 0) {
//         result.push(m)
//       } else {
//         for (let i = 0; i < arr.length; i++) {
//           let curr = arr.slice();
//           let next = curr.splice(i, 1);
//           permute(curr.slice(), m.concat(next))
//        }
//      }
//    }
  
//    permute(inputArr)
  
//    return result;
//   }
  
//   console.log(permutator(['x','y','z'])) 
//  ['x', 'y', 'z']
//  ['x', 'z', 'y']
//  ['y', 'x', 'z']
//  ['y', 'z', 'x']
//  ['z', 'x', 'y']
//  ['z', 'y', 'x']