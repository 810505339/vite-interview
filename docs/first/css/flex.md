# flex 相关面试题

## 实现一个右固定中间自适应布局

<div flex h20>
<div w100px bg-blue shrink-0></div>
<div bg-red w="100%"></div>
<div w100px bg-blue shrink-0></div>
</div>

```html
<div flex h20>
<div w100px bg-blue shrink-0></div>
<div bg-red w="100%"></div>
<div w100px bg-blue shrink-0></div>
</div>
```
## 经典骰子
### 实现一个点

<div flex justify-center >
<div w50px h50px bg-indigo flex items-center justify-center rounded>
  <div bg-black w10px h10px rounded-full></div>
</div>
</div>

```html 
<div w50px h50px bg-indigo flex items-center justify-center rounded>
  <div bg-black w10px h10px rounded-full></div>
</div>
```

### 实现两个点

<div flex justify-center >
<div w50px h50px bg-indigo flex   flex-col  justify-between    rounded> 
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full  self-end></div>
</div>
</div>

```html
<div flex justify-center >
<div w50px h50px bg-indigo flex  flex-col justify-between rounded> 
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full></div>
</div>
</div>
```
### 实现三个点

<div flex justify-center >
<div w50px h50px bg-indigo flex  justify-around  rounded> 
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full self-center></div>
  <div bg-black w10px h10px rounded-full self-end></div>
</div>
</div>

```html
<div flex justify-center>
<div w50px h50px bg-indigo flex  justify-between  rounded> 
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full self-center></div>
  <div bg-black w10px h10px rounded-full self-end></div>
</div>
</div>
```

### 实现四个点


<div flex justify-center >
<div w50px h50px bg-indigo flex  justify-around  rounded> 
  <div flex justify-around flex-col>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full ></div>
  </div>
 <div flex justify-around flex-col >
  <div bg-black w10px h10px rounded-full ></div>
  <div bg-black w10px h10px rounded-full  ></div>
 </div>
</div>
</div>

``` html

<div flex justify-center >
<div w50px h50px bg-indigo flex  justify-around  rounded> 
  <div flex justify-around flex-col>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full ></div>
  </div>
 <div flex justify-around flex-col >
  <div bg-black w10px h10px rounded-full ></div>
  <div bg-black w10px h10px rounded-full  ></div>
 </div>
</div>
</div>
```


### 五个点

<div flex justify-center>
<div w50px h50px bg-indigo flex  flex-col  justify-around rounded> 
  <div flex justify-around>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full ></div>
  </div>
    <div flex self-center>
  <div bg-black w10px h10px rounded-full ></div>
  </div>
 <div flex  justify-around>
  <div bg-black w10px h10px rounded-full ></div>
  <div bg-black w10px h10px rounded-full  ></div>
 </div>
</div>
</div>

```html

<div flex justify-center>
<div w50px h50px bg-indigo flex  flex-col  justify-around rounded> 
  <div flex justify-around>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full ></div>
  </div>
    <div flex self-center>
  <div bg-black w10px h10px rounded-full ></div>
  </div>
 <div flex  justify-around>
  <div bg-black w10px h10px rounded-full ></div>
  <div bg-black w10px h10px rounded-full  ></div>
 </div>
</div>
</div>


```
### 六个点

<div flex justify-center>
<div w50px h50px bg-indigo flex  justify-around  rounded> 
  <div flex justify-around flex-col>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full></div>
  </div>
 <div flex justify-around flex-col>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full></div>
 </div>
</div>
</div>

```html 
<div flex justify-center>
<div w50px h50px bg-indigo flex justify-around rounded> 
  <div flex justify-around flex-col>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full></div>
  </div>
 <div flex justify-around flex-col>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full></div>
  <div bg-black w10px h10px rounded-full></div>
 </div>
</div>
</div>


```
