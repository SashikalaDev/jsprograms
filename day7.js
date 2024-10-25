var bike = true;
var Gamecard = true;
if ((bike = false)) {
  if ((Gamecard = true)) {
    console.log("play the games");
  } else {
    console.log("just go and watch");
  }
} else {
  console.log("no bike, do no mall no game");
}
var user = "client";
if ((user == "admin")) {
  console.log("admin is logged");
} else if ((user == "delivery_boy")) {
  console.log("Delivery is logged");
} else if ((user == "client")) {
  console.log("client is logged");
} else if ((user == "restarant")) {
  console.log("restarant is logged");
} else {
  console.log("create new account");
}
var people={
  "Riya":"Daughter",
  "Damini":"Mother"
};
for (i in people){
  if(i=="Riya"){
      console.log(`${Object.keys(people)[0]} is ${people["Riya"]} of ${Object.keys(people)[1]}`)
  }
  else if(i=="Damini"){
      console.log(`${Object.keys(people)[1]} is the ${people["Damini"]} of ${Object.keys(people)[0]}`)
  }
 
}
console.log(`${Object.keys(people)[0]} and ${Object.keys(people)[1]} are ${people["Damini"]} and ${people["Riya"]}`)