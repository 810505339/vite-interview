# 生命周期钩子函数


| 生命周期      |                                描述                                |
| ------------- | :----------------------------------------------------------------: |
| beforeCreate  |               组件实例被创建之初，组件的属性生效之前               |
| created       | 组件实例已经完全创建，属性也绑定，但真实dom还没有生成，$el还不可用 |
| beforeMount   |         在挂载开始之前被调用：相关的 render 函数首次被调用         |
| mounted       |     el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子      |
| beforeUpdate  |          组件数据更新之前调用，发生在虚拟 DOM 打补丁之前           |
| update        |                          组件数据更新之后                          |
| activited     |                  keep-alive专属，组件被激活时调用                  |
| deactivated   |                  keep-alive专属，组件被销毁时调用                  |
| beforeDestory |                           组件销毁前调用                           |
| destoryed     |                           组件销毁后调用                           |
