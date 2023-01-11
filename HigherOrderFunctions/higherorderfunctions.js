//Map Filter Reduce In Javascript

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++){
//   console.log(companies[i]);
// }

//for Each

// companies.forEach((Company) => {
//   return console.log(Company.name);
// });

//Filter

//Ages greater than 21.
//with for loop

// const canDrink = [];
// for(let i = 0; i < ages.length; i++){
//   if(ages[i] > 21) {
//     canDrink.push(ages[i])
//   }
// };

// console.log(canDrink)

//With Filter

// const canDrink = ages.filter((age) => {
//   return age >= 21;
// });
// console.log(canDrink);

//Filter Retail Companies

// const retailCompanies = companies.filter((Company) => {
//   return Company.category ==="Retail"
// });

// console.log(retailCompanies);

//Get 80s Companies

// const eightiesCompanies = companies.filter((Company) => {
//   return Company.start >= 1980 && Company.start < 1990  ;
// })
// console.log(eightiesCompanies);

//Get Companies who lasted more than 10 years

// const lastedCompanies = companies.filter((Company) => {
//   return Company.end - Company.start >= 10;
// });
// console.log(lastedCompanies);

//Map

//squaring ages and then multiplying by 2 and then finding their square roots.
// const agessquare = ages
// .map((age) => {
//   return age ** 2
// })
// .map ((age) => {
//   return age * 2
// })
// .map ((age) => {
//   return Math.sqrt(age)
// })

// console.log(agessquare);

//Sort
// companies sorted by start dates
// const sortedCompanies = companies.sort((a, b) => {
//   return a.start > b.start ? 1 : -1;
// });
// console.log(sortedCompanies);

//sort ages

// const sortedAges = ages.sort((a,b) => a - b)
// console.log(sortedAges)

//Reduce

const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 20 },
  { name: "Chicken", price: 10 },
  { name: "Monitor", price: 100 }
];

// let totalPrice = 0;
// items.forEach((item) => {
//   return totalPrice += item.price
// })

// const totalPrice = items.reduce((total, item) => {
//   //how reduce is working
//   console.log(`Total : ${total}`)
//   console.log(`Item : ${item.price}`)

//   return total + item.price
// }, 0)

// console.log(totalPrice)
