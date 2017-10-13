## Aliplayer播放器项目创建命令行

Aliplayer-cli命令行可以创建Aliplayer的体验Demo

### 安装

依赖于[node.js](https://nodejs.org)

```sh

npm install aliplayer-cli -g

```

### 使用介绍

#### 命令格式

```sh

aliplayer-cli <type> <folder>

```

#### 参数

命令有两个参考:

- type: 项目类型，可选值为['simple'](https://github.com/alilmq/aliplayer-simple-demo) or ['webpack'](https://github.com/alilmq/h5demo)，simple(简单类型)项目就只包含一个html文件， webpack(复杂类型)项目包含了组件化、使用webpack、区分测试和生产环境等。

- folder: 在那个文件夹下创建项目

#### 例子

```sh

aliplayer-cli simple aliplayer-demo

```


