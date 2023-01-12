//Promises

// let p = new Promise((resolve, reject) => {
//   let a = 2 + 2;
//   if (a === 4) {
//     resolve("Success");
//   } else {
//     reject("Failure");
//   }
// });

// p.then((message) => {
//   console.log("This is in Then - " + message);
// }).catch((message) => {
//   console.log("This is in Catch - " + message);
// });

// Fetching API using promises
//Countries API
// const url = "https://restcountries.com/v2/all";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Breaking Bad API

// const url = "https://www.breakingbadapi.com/api/";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async Await
const url = "https://restcountries.com/v2/all";
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const Countries = await response.json();
    console.log(Countries);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
