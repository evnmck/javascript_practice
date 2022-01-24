// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

async function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Enrolled in');
    }, 200);
  });
}

async function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this student is taking 15 credits');
    }, 3000);
  });
}

async function runner() {
  const b_result = await b().catch((message) => {});
  console.log(b_result);
  const a_result = await a();
  console.log(a_result);
}

runner();

//1 b
//2 a
//3 c
