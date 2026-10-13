let statuscode=404
let catogory=statuscode<300?"success":
statuscode<400?"redirect":
statuscode<500?"client error":"server error"
console.log(`statuscode is ${statuscode}: ${catogory}`);