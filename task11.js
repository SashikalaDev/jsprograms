var Score = 95;
Score >= 90
  ? console.log("Excellent")
  : Score == 89 || Score >= 60
  ? console.log("Good")
  : console.log("Need Improvement");

var day = "Monday";
day=="saturday" || day=="sunday"?console.log("Weekend"):console.log("Weekday");

var str="MalayalaM";
var str2="";
for(j=str.length-1;j>=0;j--){
  str2+=str[j];
}

str==str2?console.log("palindrome"):console.log("Not a Palindrome")




var str1 = "HELLO";
var op1 = "";
for (i = 0; i < str1.length; i++) {
  op1 += str1[i];
  console.log(op1);
}

