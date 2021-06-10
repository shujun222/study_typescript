简洁版： webpack如何支持ts

1. 初始化项目
yarn init -y

2. 安装依赖
yarn add webpack webpack-cli typescript ts-loader

3. 新建配置文件
tsconfig.json: 里面可以啥也不写，开心就好
webpack.config.js: 这些配置还真少不了，指定entry，module:[ts-loader]