window.promises = [];//1st create a empaty promise
//use for loop to create five promises
for (let i = 0; i < 5; i++) {

	// =>Multiplying Math.random() by 5 gives a random 
	//number between 0 (inclusive) and 5 (exclusive).
	// =>Adding 1 to the result of Math.floor(Math.random() * 5)
	// 	gives a random number between 1 (inclusive) and 5 (inclusive).
	// =>We then use Math.floor() to round down to the nearest integer.
  const randomTime = Math.floor(Math.random() * 5) + 1;
  const promise = new Promise((resolve) => {

    setTimeout(() => {
//resolve the promise with that time after the specified delay.
      resolve(randomTime);
    }, randomTime * 1000);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then((result) => {
    document.getElementById("output").innerHTML = result;
  })
  .catch((error) => {
    console.error(error);
  });
//
// for(let i=0;i<5;i++)
// 	{
// 		const randomTime=Math.floor(Math.random()*5+1);
// 	}



















