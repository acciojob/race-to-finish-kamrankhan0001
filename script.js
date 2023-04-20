window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// const promises = [
//   new Promise(resolve => setTimeout(() => resolve(1), Math.floor(Math.random() * 5000) + 1000)),
//   new Promise(resolve => setTimeout(() => resolve(2), Math.floor(Math.random() * 5000) + 1000)),
//   new Promise(resolve => setTimeout(() => resolve(3), Math.floor(Math.random() * 5000) + 1000)),
//   new Promise(resolve => setTimeout(() => resolve(4), Math.floor(Math.random() * 5000) + 1000)),
//   new Promise(resolve => setTimeout(() => resolve(5), Math.floor(Math.random() * 5000) + 1000))
// ];

// Promise.any(promises).then(result => {
//   document.getElementById("output").innerHTML = result;
// }).catch(error => {
//   console.log(error);
// });

//const promises = [];

for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  const promise = new Promise((resolve) => {
    setTimeout(() => {
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

