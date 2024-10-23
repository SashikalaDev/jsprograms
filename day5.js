var arr=[1,2,3,4,5,6,7,8,9,10];
for (x in arr){
    
    console.log(`2x${arr[x]}=${arr[x]*2}`)
}
var obj={"name":"23r","strength":"55","session":"js"}
for (i in obj){
    console.log(`${i} is ${obj[i]}`)
}
var obj1={
    "name":"abc",
    "age":"25",
    "DOB":"24-03-1999",
    "location":"Hyd",
    "job":"IT"
}
obj1.session="js"
x=Object.keys(obj1);
console.log(x.length)

var str="GoodMorning"
for (a in str){
    console.log(parseInt(a)+1)
}
var arr1=[1,2,3,4,5,6,7,8,9]
for (b in arr1){
    console.log(`2-${arr1[b]}=${2-arr1[b]}`)
}

var arr2=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (c in arr2){
   d=arr2[c]%2!=0
   
   console.log(`${d=0}${arr2[c]}`)
}
