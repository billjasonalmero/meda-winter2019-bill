// async function  firstAsync () {
//   return 27;
// }


// firstAsync().then((result) => {
//   console.log(results);
// });
let updateThis = 0;

async function firstAsync () {
  let action = new Promise((resolve, reject) => {
    setTimeout(() => {resolve("Value to send to the Promise so it completes."); 3000})
  })

  console.log(updateThis);
  updateThis = 1;
  console.log(updateThis);
  let result = await action;


  updateThis = results;
  console.log(updateThis);

  console.log(result);

  return true;

}

let something = await firstAsync();
console.log(something);
console.log("I will run after the firstAsync function")