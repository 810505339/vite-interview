# promise 

```ts

async function async1() {
  console.log('async1 start') 
  await async2();
  console.log('async1 end') 
}
async function async2() {
  console.log('async2')
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1();

new Promise(function (resolve) {
  console.log('promise1')
  resolve();
  console.log('promise2')
}
).then(() => {
  console.log('promise3')
})

console.log('script end')  


```

