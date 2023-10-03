//scope global
// var a = 1;
// let b = 2;
// const c = 3;

//scope función
// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function Scope: ", a, b, c);//4,5,6
// }

// test();

// //scope de bloque if/for bucles,etc
// if (true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("If Scope: ", a, b, c);// 4,5,6
//   }
  

// console.log("Global Scope: ", a, b, c);//1,2,3


//*Práctica
var a = 1;
let b = 2;
const c = 3;

for(let b = 0; b<10; b++){
    console.log('Loop: ',b)//0,9
}

console.log("Global Scope: ", a, b, c);//1,2,3

// var a = 1;
// let b = 2;
// const c = 3;

// for(var a = 0; a<10; a++){
//     console.log('Loop: ',a)//0,9
// }

// console.log("Global Scope: ", a, b, c);
//10,2,3 ->7

