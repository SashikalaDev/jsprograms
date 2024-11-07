var num=[3,5,10,15,23,22,25,35,56];
var input=[];
for (i in num){
    if(num[i]%5==0)
        input.push(num[i]);
}
console.log(input)

var arr=["html","csS","javaScrIPT","react","angulaR","nodE","EXPREss"];
var input1=[];
for (j in arr){
    if(arr[j].at(-1)==(arr[j].at(-1)).toUpperCase())
        input1.push(arr[j])
}
console.log(input1)

var arr1=["html","css","js","react","angular"]
var input2=[];
for (k in arr1){
    if(k%2==0)
        input2.push(arr1[k].toUpperCase())

}
console.log(input2)
