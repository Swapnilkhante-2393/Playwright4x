let temp=35
let feel=
(temp>40)? "too hot":
(temp>30)?"hot":
(temp>20)?"normal":
(temp>10)? "cold":"too cold"
console.log(`temp is ${temp}: ${feel}`)