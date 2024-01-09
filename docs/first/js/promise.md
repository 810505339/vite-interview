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



## 手动实现一个Promise.all
核心思想利用循环`promise.resolve`

```ts{6-11}
  async function myPromiseAll(Promises: unknown[]) {
    let count = 0 //声明一个计数器用于记住成功的个数
    const resList: any = [] //声明一个list 用于返回成功的之后的List [p1,p2,p3]
    return new Promise((resolve, reject) => {
      Promises.forEach((element, i) => { //循环传入的list
        Promise.resolve(element).then(res => {  
          count++ 
          resList[i] = res
          if (count === Promises.length) { //成功的个数跟传入的list的数量作比对
            resolve(resList)
          }
        }).catch(reject)
      });
    })
  }
  const p1 = Promise.resolve('p1')

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 延时一秒')
    }, 1000)
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p3 延时两秒')
    }, 2000)
  })

  const p4 = Promise.reject('p4')

  myPromiseAll([p1, p2, p3]).then(res => {
    console.log(res);
  })
  myPromiseAll([p2, p3, p4]).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
```
