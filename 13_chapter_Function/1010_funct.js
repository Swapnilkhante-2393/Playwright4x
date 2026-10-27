const getresult=(score)=>{
    if(score>70)
        return "pass";
    return "fail";

}
console.log(getresult(75));
console.log(getresult(50));
