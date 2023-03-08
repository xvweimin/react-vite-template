# react-vite-template

> 基于 vite 搭建的 react + ts 项目模板，预设常用项目依赖与配置

## 开始

通过 GitHub 的派生（Fork）功能即可快速创建业务所需的新项目： [ 派生项目（Fork project） ](https://github.com/xvweimin/react-vite-template/fork)

> 因为派生项目的特性，后续关于此项目的修改调整，可以通过 [ 新建合并请求 ](https://github.com/xvweimin/react-vite-template/compare) 的方式将更改同步至派生项目中。以此达到只需维护一套配置，即可实现所有项目配置同步，方便统一维护升级。

## 项目启动

此项目使用 Yarn 作为包管理工具：

```bash
yarn

yarn dev
```

> 兼容性要求：node 版本 14.18+，16+
>
> 推荐使用 [ nvm ](https://github.com/creationix/nvm#installation) (macOS/Linux) 或 [ nvm-windows ](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) 在不同项目之间切换节点版本

## 项目结构

```
  -
  |-- public
  |-- src         项目代码
      |-- api         接口层
      |-- assets      静态资源
      |-- components  全局组件
      |-- hooks       自定义hooks
      |-- pages       页面组件
      |-- redux       状态管理
      |-- routes      全局路由
      |-- types       全局类型
      |-- utils       工具函数
      |-- App.tsx     根组件
      |-- main.tsx    入口文件
```

## 项目 Packages

### 基本框架

- [x] ⭐️ React
- [x] ⭐️ React Router
- [x] ⭐️ Redux
- [x] ⭐️ Scss
- [x] ⭐️ Axios

### 常用工具

- [x] 🛠️ ESLint
- [x] 🔧 Stylelint
- [x] ⚙️ Prettier
- [x] 🎁 Husky
- [x] 💡 lint-staged
- [x] 📝 commitlint
- [x] ♻️ Autoprefixer
- [x] 🎨 normalize.css

## 说明

- 后续如有针对项目配置优化的需要，可通过提交 PR 至 `react-vite-template` 项目配置后再同步至其他项目。
- 项目中存在较多示例代码，创建新项目可移除示例代码仅保留核心结构部分，后续考虑加入一键清除脚本。
- 其他说明可参考：
  - [ Vite 官方中文文档 ](https://cn.vitejs.dev/)
