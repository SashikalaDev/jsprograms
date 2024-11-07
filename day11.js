var age=25;
var citizenship=true;
(age>=18 && citizenship)?console.log("eligible"):console.log("not eligible");

//var isloggedin=false;
//isloggedin?console.log("home page"):console.log("loggin page")

var isloggedin=false;
var issignup=false;
issignup?isloggedin?console.log("home page"):console.log("login page"):console.log("create a new account")


var ismale=false;
var age=19;

ismale?age>=21?console.log("he is eligible for marriage"):console.log("he is not eligible for marriage")
:age>=18?console.log("she is eligible for marriage"):console.log("she is not eligible")
//var str1="*****"
//var op="";
//for(i=0;i<4;i++){
  // op+=str1[i]
    //console.log(op)
//}

for(j=10;j>=0;j--){
    console.log(j)
}
var str="";
for(i=1;i<=10;i++){
str+="*";
console.log(str)
}
