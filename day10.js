var marks=95;
if(marks>=90){
    console.log("Distinction with",marks)
}
else if(marks>=75 && marks==90){
    console.log("First Class with",marks)
}
else if(marks>=60 && marks<75){
    console.log("Second Class with",marks)
}
else if(marks>=35 && marks<60){
    console.log("Third Class with",marks)
}
else if(marks>=0 && marks<35){
console.log("Fail")
}
else{
    console.log("Invalid marks")
}

var name1="abc";
if(name1=="abc" || name1=="def"){
    console.log("name is valid")

}
else {
    console.log("Invalid")
}