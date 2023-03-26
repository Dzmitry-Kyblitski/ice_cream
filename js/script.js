// let circle = document.querySelector ['.circl-one' , '.circl-tho ', '.circl-three']
// let selectCircle = document.getElementById['.ise-cream-one', 'ise-cream-tho' , 'ise-cream-thee']

let circle = document.querySelector(".circl-one");
let selection = document.getElementById("btn ise-cream-one");

selection.addEventListener("change", function () {
  if (selection.value === "vanile") {
    circle.style.background = "rgb(255, 238, 226)";
  } else if (selection.value === "chocolade") {
    circle.style.background = "rgb(71, 31, 3)";
  } else if (selection.value === "strawberry") {
    circle.style.background = "rgb(247, 5, 58)";
  }
});

let circleTho = document.querySelector(".circl-tho");
let selectTho = document.getElementById("btn ise-cream-tho");

selectTho.addEventListener("change", function () {
  if (selectTho.value === "banana") {
    circleTho.style.background = "rgb(203, 247, 5)";
  } else if (selectTho.value === "toffi") {
    circleTho.style.background = "rgb(101, 209, 0)";
  } else if (selectTho.value === "caramel") {
    circleTho.style.background = "rgb(255, 143, 68)";
  }
});

let circleThree = document.querySelector(".circl-three");
let selectThree = document.getElementById("btn ise-cream-three");

selectThree.addEventListener("change", function () {
  if (selectThree.value === "pistachios") {
    circleThree.style.background = "rgb(50, 117, 65)";
  } else if (selectThree.value === "mango") {
    circleThree.style.background = "rgb(249, 188, 66)";
  } else if (selectThree.value === "buble-gum") {
    circleThree.style.background = "rgb(234, 24, 195)";
  }
});

//1
// const arre = [25, 16, 3, 8, 5, 4]
// let newArr = arre.map((el) =>{
//     if(el % 2 === 0 ){
//         return el*2
//     }
//     else {
//       return el
//     }
// })
// console.log(newArr)

//2
// let arr = [3, 6, 8, 200, 1]
// let res = arr[0]
// for(i = 1 ; i < arr.length ; i++){
//   if(  res < arr[i]){
//       res = arr[i]
//   }
// }
// console.log( res)

//3
// let arr = [ 5, 10, 0, 4, 6, 11]
// let sum = arr.filter((el) =>{
//   if(el > 4 )
//   return el
// })
// console.log(sum )

//4
// let arr = ['php', 'js', 'php', 'java','js']
// let sum = arr.filter((item, index) => {
//     return arr.indexOf(item) === index
// });
// console.log(sum);
