# react
`react`,`Api`分为 `组件类` `工具类` `hooks` `react-dom` 一共四个方向,加以讨论:
## 组件类
组件类分为三种类型:
1. 继承基类的组件:`Component` `PureComponent`
2. 高阶组件:`memo` `forwardRef`
3. 内置的组件:`Fragment` `StrictMode` `Profiler`(这个是`React Developer Tools`内置组件)
<img src="/react/react组件类.png" rounded  data-zoomable p-10/>

### Component
`Component`是`class`组件的根基.类组件的一切始于`Component`

```ts
class Index extends React.Component{
    constructor(props){
        super(props)
        this.state={
           data:{
              name:'alien',
              age:28
           }
        }
    }
    handerClick= () =>{
        const { data } = this.state
        data.age++
        this.setState({ data })
    }
    render(){
        const { data } = this.state
        return <div className="box">
        <div className="show" >
            <div> 你的姓名是: { data.name } </div>
            <div> 年龄： { data.age  }</div>
            <button onClick={ this.handerClick } >age++</button>
        </div>
    </div>
    }
}
```

### PureComponet
`PureComponet`被称为`纯组件`,使用方法跟`Component`一样,作用是避免不必要的`render`,提高性能;


### memo
`memo`跟`PureComponet`类似;作用是用于`函数式`组件;也是避免不必要的`render`,对于`props`进行`浅比较`也就是使用`Object.is`比较;

#### 未使用memo的版本:

`react`更新组件的机制导致`react`内部无法知道那个组件跟新,所以会出现组件`props`未变化,但是`组件`进行重新`render`的情况:
<img src="/react/未使用memo.gif" rounded  data-zoomable p-10/>

```tsx
import { FC, useState } from "react"

function App() {
  const [str, setStr] = useState('')

  return <>
    {/* 输入导致跟新 */}
    <input value={str} onChange={(e) => setStr(e.target.value)} />
    <div>{str}</div>
    <Counter count={0} />
  </>
}

const Counter: FC<{ count: number }> = (props) => {
  console.log('渲染couter');
  const { count } = props
  return <>
    {count}
  </>
}

export default App
```
#### 使用memo的版本:
::: warning
1. `Object.is({},{})`返回`false`
2. `Object.is([],[])`返回`false`
:::

<img src="/react/使用memo.gif" rounded  data-zoomable p-10/>

```tsx
import { FC, memo, useState } from "react"

function App() {
  const [str, setStr] = useState('')

  return <>
    {/* 输入导致跟新 */}
    <input value={str} onChange={(e) => setStr(e.target.value)} />
    <div>{str}</div>
    <Counter count={0} />
  </>
}
/* memo进行缓存 */
const Counter: FC<{ count: number }> = memo((props) => {
  console.log('渲染counter');
  const { count } = props
  return <>
    {count}
  </>
})

export default App

```

###### 思考:如果传入的是一个对象或者是一个array的时候该怎么办呢?
为了最大化使用 `memo` 的效果，应该尽量减少 `props` 的变化次数。例如，如果 `props` 是一个对象，可以使用 `useMemo` 避免父组件每次都重新创建该对象：
<img src="/react/使用useMemo.gif" rounded  data-zoomable p-10/>

```tsx
import { memo, useMemo, useState } from "react"

function App() {
  const [str, setStr] = useState('')
  /* 这里使用useMemo缓存array */
  const avatars = useMemo(() => {
    return Array.from({ length: 4 }, (_, index) => {
      return `https://picsum.photos/50/50?random=${index}`
    })
  }, [])

  return <>
    {/* 输入导致跟新 */}
    <input value={str} onChange={(e) => setStr(e.target.value)} />
    <div>{str}</div>
    <AvatarList avatars={avatars} />
  </>
}


const AvatarList = memo((props: { avatars: Array<string> }) => {
  const { avatars } = props
  console.log('渲染list') /* 只有初次渲染会触发 */
  return <>
    {avatars.map((avatar, i) => <img src={avatar} key={i} className="w-100px h-100px  rounded-full m-2" />)}
  </>
})

export default App

```



## 参考链接
[react官方文档](https://zh-hans.react.dev/reference/react/memo#minimizing-props-changes)
