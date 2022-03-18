// Ice cream preparation.
// stock ingredients.
const stocks={
  fruits:["Strawberyy", "Banana", "Grapes", "Apple"],
  liquids:["Water", "Ice"],
  holder:["Cone", "Cup", "Stick"],
  toppings:["Chocolate", "Peanuts"]
};
const is_shop_open=false;

const order=(work, time)=>{
  return new Promise((resolve, reject)=>{
    if(!is_shop_open){
      // resolve and a set time out
      setTimeout(()=>{
         resolve(work())
      }, time)
     
    }else{
      // reject
      reject(console.log("Our Shop is closed!"));
    }
  }
)
}

order(()=>console.log(`${stocks.fruits[0]} was selected.`),2000)
.then(()=>{
  return order (()=>console.log("Food preparation has started."),0000)
})
.then(()=>order(()=>console.log("Fruit was chopped"),2000))
.then(()=>order(()=>console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} were added.`),1000))
.then(()=>order(()=>console.log("Start the machine"),2000))
.then(()=>order(()=>console.log(`${stocks.holder[0]} was selected!`),2000))
.then(()=>order(()=>console.log("Here's your ice cream."),3000));

