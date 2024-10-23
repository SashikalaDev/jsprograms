var car={
    "brand":"Toyota",
    "model":"corolla",
    "year":"2020"
}
for (i in car){
    console.log(`${i}: ${car[i]}`)
}

var number=[1,2,3,4,5]

for (j in number){
    
    console.log(`${number[j]}-${"hi".toUpperCase()}`)
}

var fruits=['Apple','Banana','Cherry','Date']
for (k in fruits){
console.log(`${k}-${fruits[k].toUpperCase()}`)
}

var obj={
    "name":"john",
    "age":"30",
    "address":{
        "city":"Los Angeles",
        "state":"CA"
    }
}
 obj.address.city="San Francisco";
 console.log(obj)

 var car1={
    "brand":"Toyota",
    "model":"camry",
    "year":"2020"
 }
 car1.model="coralla"
 console.log(car1)

 var recipe={
    'name':'pasta',
    'servings':'2',
    'ingredients':['noodles','sause']
 }
 recipe.ingredients.push("cheese");
 console.log(recipe)
 
