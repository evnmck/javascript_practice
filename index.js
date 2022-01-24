// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Enrolled in');
    }, 200);
  });
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this student is taking 15 credits');
    }, 300);
  });
}

b();
a();

//1 b
//2 a
//3 c
