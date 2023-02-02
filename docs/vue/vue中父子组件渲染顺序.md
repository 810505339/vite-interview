# vue中父子组件渲染顺序？

父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载。

```rust

父beforeCreate => 父create => 父 beforeMount => 子beforeCreate => 子create =>子 beforeMount =>子mounted => 父mounted

```
更新过程:

```rust

父beforeUpdate => 子beforeUpdate=>子updated=>父updated

```

销毁过程 :
```rust

父beforeDestroy => 子beforeDestroy=>子destroyed=>父destroyed

```
