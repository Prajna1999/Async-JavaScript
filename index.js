// Ice cream preparation.
// stock ingredients.
const stocks={
  fruits:["Strawberyy", "Banana", "Grapes", "Apple"],
  liquids:["Water", "Ice"],
  holder:["Cone", "Cup", "Stick"],
  toppings:["Chocolate", "Peanuts"]
};


// place order.
const placeOrder=(fruitNameIndex,productionCallback)=>{

  setTimeout(()=>{
    
    console.log(`${stocks.fruits[fruitNameIndex] } was selected.`);
     productionCallback();
  },3000)

 
}
// Execution Order:outward>inward
// production call back.
const production=()=>{
  setTimeout(()=>{
    // parent setTimeOut 
    console.log("Production has started!");

    // leveltwo
    setTimeout(()=>{
      console.log("The fruit has been chopped!");

      // level three. Add water/ice.
      setTimeout(()=>{
        console.log(`${stocks.liquids[0]}and ${stocks.liquids[1]} was added.`);

        // level four.
        setTimeout(()=>{
          console.log("The machine has been started");

          // Level five.
          setTimeout(()=>{
            console.log(`${stocks.holder[0]} was seleceted.`);

            // Level six.
            setTimeout(()=>{
              console.log(`${stocks.toppings[1]} were added as toppings.`);
              // Level seven. Serve the ice cream.
              setTimeout(()=>{
                console.log("Conratulations. Here's your order.")
              },5000)
            },3000)
          },2000)
        },1000)
      },1000)
    },2000)
  },0000)
}
placeOrder(0,production);