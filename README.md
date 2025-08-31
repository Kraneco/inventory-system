# 进销存管理系统

基于 Next.js + TypeScript + Tailwind CSS + Ant Design + Zustand 构建的现代化进销存管理系统。

## 功能特性

- 🔐 用户认证系统（登录/登出）
- 📊 数据仪表盘
- 📦 材料管理
- 🛍️ 产品管理
- 📋 订单管理
- 👥 用户管理
- ✅ 代办任务
- 🏪 供应商管理

## 技术栈

- **前端框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: Ant Design
- **状态管理**: Zustand
- **认证**: JWT + bcryptjs
- **图标**: Ant Design Icons

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 访问应用

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 默认账户

系统预置了以下默认账户：

### 管理员账户

- **用户名**: `admin`
- **密码**: `password`
- **角色**: 管理员

### 普通用户账户

- **用户名**: `user`
- **密码**: `password`
- **角色**: 普通用户

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   │   ├── auth/          # 认证相关API
│   │   └── init/          # 初始化API
│   ├── dashboard/         # 仪表盘页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页（登录页）
├── components/            # React 组件
│   └── LoginPage.tsx      # 登录页面组件
├── data/                  # 数据和工具
│   └── initDatabase.ts    # 数据库初始化
├── stores/                # Zustand 状态管理
│   └── authStore.ts       # 认证状态管理
└── types/                 # TypeScript 类型定义
    └── index.ts           # 核心类型定义
```

## 数据库设计

系统设计了完整的数据库表结构，包括：

- **users**: 用户表
- **materials**: 材料表
- **suppliers**: 供应商表
- **products**: 产品表
- **orders**: 订单表
- **todos**: 代办任务表
- **material_inbounds**: 材料入库记录表
- **material_outbounds**: 材料出库记录表

## API 接口

### 认证接口

- `POST /api/auth/login` - 用户登录

### 初始化接口

- `POST /api/init` - 数据库初始化

## 开发说明

### 环境变量

创建 `.env.local` 文件并添加以下配置：

```env
JWT_SECRET=your-secret-key-here
```

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 规则
- 使用 Prettier 进行代码格式化

### 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 功能模块

### 1. 登录页面

- 用户名/密码登录
- 记住我功能
- 表单验证
- 错误提示

### 2. 仪表盘

- 数据统计卡片
- 系统信息展示
- 快速操作入口

### 3. 材料管理（待开发）

- 材料列表
- 材料分类
- 入库管理
- 出库管理
- 库存预警

### 4. 产品管理（待开发）

- 产品列表
- 产品分类
- 材料配方
- 库存计算

### 5. 订单管理（待开发）

- 订单列表
- 订单状态跟踪
- 退货管理
- 超时提醒

### 6. 用户管理（待开发）

- 用户列表
- 用户信息
- 订单历史
- 消费统计

### 7. 代办任务（待开发）

- 任务列表
- 任务状态
- 优先级管理
- 完成时间记录

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有问题或建议，请通过以下方式联系：

- 邮箱: admin@example.com
- 项目地址: [GitHub Repository]

---

**注意**: 这是一个演示项目，使用模拟数据进行开发。在生产环境中，请配置真实的数据库连接和适当的安全措施。
