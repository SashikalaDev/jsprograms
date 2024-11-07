var age=25;
var citizenship=true;
if(age>=18 && citizenship==true){
    console.log("can vote")
}
else{
    console.log("can not vote")
}

var age1=35;
var hasInvitation=true;
if(age>=21 || hasInvitation==true){
    console.log("canEnterClub")
}
else{
    console.log("CanNotEnterClub")
}

var age=57;
var isMember=true;
if(age>=65 || isMember==true){
    console.log("is Elegible For Discount")

}
else{
    console.log("is Not Eligible For Discount")
}

var GPA=7.8;
var extracurriculars=true;
var recommendation=true;
if((GPA>=3.5) && (extracurriculars==true || recommendation==false)){
    console.log("is Eligible Scholarship")
}
else{
    console.log("is Not Eligible Scholarship")
}