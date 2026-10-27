function getstatus(code){
     if (code>=200 &&code<=300){
        return "success";
     }
     else if(code>=400 && code <=500){
        return "client error";
     }
     else if(code>=500){
        return "server error";
     }
    else{
        return "unknown"
    }
}

console.log(getstatus(200));
console.log(getstatus(404));
console.log(getstatus(500));