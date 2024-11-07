var arr=["mom","js","malayalam","html","css","dad"];
arr1=[];
var str="";
var str1="";
var str2="";
var str3="";
var str4="";
var str5="";
var str6="";
var str7="";
var str8="";
var str9="";
var str10="";
var str11="";
str+=arr[0]
for(i=str.length-1;i>=0;i--){
    str1+=str[i];
}
if(str==str1){
    arr1.push(arr[0])
}
str2+=arr[1];
for(i=str2.length-1;i>=0;i--){
    str3+=str2[i]
}
if(str2==str3){
    arr1=arr1.push(arr[1])
}
str4+=arr[2];
for(i=str4.length-1;i>=0;i--){
    str5+=str4[i]
}
if(str4==str5){
    arr1.push(arr[2])
}
str6+=arr[3];
for(i=str6.length-1;i>=0;i--){
    str7+=str6[i]
}
if(str6==str7){
    arr1.push(arr[3])
}
str8+=arr[4];
for(i=str8.length-1;i>=0;i--){
    str9+=str8[i]
}
if(str8==str9){
    arr1.push(arr[4])
}
str10+=arr[5];
for(i=str10.length-1;i>=0;i--){
    str11+=str10[i]
}
if(str10==str11){
    arr1.push(arr[5])
}
console.log(arr1)

