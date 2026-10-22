let fruit=["banana","apple","chery"]
fruit.sort()
console.log(fruit);//alpphabetical by defult

let score=[4,3,2];
console.log(score.sort())

//proper sorting asc and desc

let num=[10,1,20,2];
num.sort();
console.log(num)
//asc dec

num.sort((a,b)=>a-b)
console.log(num);
num.reverse();
console.log(num);