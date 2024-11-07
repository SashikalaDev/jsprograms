// function number(a){
// if(a%2==0){
//     console.log("Given number is even number")
// }
// else{
//     console.log("Given number is odd number")
// }
// }
// number(8);


// var str1="";
// function str(b="hello"){
//     for(i=b.length-1;i<=0;i++){
//         str1+=b[i];
//     }
//     if(str1==b){
//         console.log("Given string is palindrome")
//     }
//     else{
//         console.log("Given string is not palindrome")
//     }

//     }
//     str();

//     function demo(num1,num2,num3){
//         if(num1>num2&&num1>num3){
//             console.log(`${num1} is greatest number`)
//         }
//         else if(num2>num1&&num2>num3){
//     console.log(`${num2} is greatest number`)
//         }
//         else{
//             console.log(`${num3} is greatest number`)
//         }
//     }
//     demo(10,15,6) 
   
    
    function sample(arr=[1,2,3,4,5]){
        for(i=0;i<arr.length;i++){
         arg=(arr[0]+arr[1]+arr[2]+arr[3]+arr[4])/arr.length
         }
        console.log(arg)
    }
    sample();

    var grade = 23;
switch (grade) {
  case (grade >= 80 && grade <= 100):
    console.log("A Grade");
    break;
  case (grade >= 65 && grade < 80):
    console.log("B Grade");
    break;
  case (grade >= 50 && grade < 65):
    console.log("C Grade");
    break;
  case (grade >= 35 && grade < 50):
    console.log("D Grade");
    break;
  case (grade >= 0 && grade < 35):
    console.log("Fail, Better Luck next time");
    break;
  default:
    console.log("Invalid Input");
}