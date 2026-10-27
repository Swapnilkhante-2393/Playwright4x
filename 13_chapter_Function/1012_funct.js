function validatestatuscode(status){
    if(status>=200 && status<=300)
    {
        console.log("request is finel!")
    }else{
        console.log("Error Message")
    }
}

const validatestatuscode_Exp = function(status){
    if (status>=200 && status<=300){
        console.log("Request is finel!")
    }
}
const  validatestatuscde_Arrow=(status)=>{
    if(status >= 200 && status<=300){
        console.log("request is final !")
    }
}

validatestatuscode(301);
validatestatuscode_Exp(301);
validatestatuscde_Arrow(200);

