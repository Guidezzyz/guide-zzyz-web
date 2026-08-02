# 开发指南 — 登录/注册/个人中心功能

## 功能概述

本次新增功能：
- **注册 / 登录**：弹窗模态框，支持邮箱+密码注册，登录成功后持久化会话（localStorage）
- **个人中心** `/profile`：查看并编辑用户名、年级、个人简介；上传头像（本地 base64）；查看自己发出的投稿历史
- **Navbar 更新**：未登录时显示「登录/注册」按钮；登录后显示头像+用户名，点击展开下拉菜单（个人中心 / 退出登录）
- **投稿关联**：登录后提交投稿会记录到用户的投稿历史，可在个人中心查看状态

> **注意**：当前版本为纯前端实现，用户数据存储于浏览器 `localStorage`，无后端接口。后续对接真实后端时，只需替换 `src/lib/storage.ts` 和 `src/context/AuthContext.tsx` 中的相关逻辑即可。

---

## 新增文件结构

```
src/
├── OOcontext/
│   └── AuthContext.tsx        # React Context，全局认证状态
├── OOlib/
│   └── storage.ts             # localStorage 读写工具函数
├── OOtypes/
│   └── auth.ts                # User / Post / AuthContextType 类型定义
├── OOcomponents/
│   └── AuthModal.tsx          # 登录/注册模态框组件
└── OOpages/
    └── Profile.tsx            # 个人中心页面
```

**修改的文件：**
- `OOsrc/App.tsx` — 包裹 `AuthProvider`
- `OOsrc/routes.ts` — 新增 `/profile` 路由
- `OOsrc/components/Navbar.tsx` — 添加登录/注册按钮和用户下拉菜单
- `OOsrc/pages/Submit.tsx` — 投稿时记录到用户历史

---



## 技术实现说明

### 认证流程

```
用户注册/登录
    ↓
AuthContext.login() / AuthContext.register()
    ↓
写入 localStorage（用户列表 + 当前用户ID）
    ↓
React state 更新 → UI 响应式更新
```

### 数据存储键名（localStorage）

| 键名 | 内容 |
|------|------|
| `guide_zzyz_users` | 所有用户列表（JSON数组） |
| `guide_zzyz_current_user` | 当前登录用户的ID |
| `guide_zzyz_posts` | 所有投稿记录（JSON数组） |

### 头像存储

头像以 base64 格式存储在用户对象的 `avatar` 字段中，限制 2MB 以内。后续接入后端时，改为上传到 OSS 并存储 URL 即可。

---

## 后续接入后端的改动点

当团队搭建后端 API 后，主要需修改以下两个文件：

**`src/lib/storage.ts`** → 替换为真实 HTTP 请求（fetch/axios）

**`src/context/AuthContext.tsx`** → 将 `login`、`register`、`updateProfile`、`addPost` 中的本地存储操作替换为 API 调用，并处理 JWT token

其余所有组件（Navbar、AuthModal、Profile、Submit）无需修改。

---

## 常见问题

**Q: 数据在哪里？刷新会丢失吗？**
A: 数据存在浏览器 `localStorage`，刷新后数据保留。但清除浏览器数据/换浏览器/隐私模式下数据会丢失。

**Q: 密码安全吗？**
A: 当前版本明文存储（仅适合本地演示）。接入后端时必须使用 bcrypt 等哈希算法在服务端处理密码，绝不在前端存储明文密码。

**Q: 投稿状态怎么更改？**
A: 目前所有投稿默认为 "审核中"（pending）。后续可由管理员后台更改状态，前端读取 API 数据展示。
