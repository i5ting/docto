# docto


## Install 

```
npm install -g docto
```

## Usages

1）指定用户和项目

```
docto i5ting/docto
```

2）指定项目（无用户名）【todo】

i5ting=git config --global user.name

```
docto docto
```

3）无参数【todo】

如果当前是一个git仓库，直接读取

- user
- project

```
docto
```

## Test

test cli with 


```
npm link
```

## TODO

- [x] 编写命令行工具
- [x] 在当前目录执行，copy模块安装目录的模板到当前目录
- [x] 将模块依赖的模块以软连接的形式创建到当前目录的node_module下面

模板生成

- [x] 生成README.md()
- [x] copy gulpfile.js
- [x] 创建依赖

copy完成后

- 向gitignore增加
  - preview目录
  - node_modules