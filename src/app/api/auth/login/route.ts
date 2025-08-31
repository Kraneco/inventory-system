import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { LoginRequest, LoginResponse, User } from "@/types";

// 模拟数据库中的用户数据
const mockUsers: User[] = [
  {
    id: "1",
    username: "admin",
    email: "admin@example.com",
    phone: "13800138000",
    role: "admin",
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    username: "user",
    email: "user@example.com",
    phone: "13800138001",
    role: "user",
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

// 模拟密码哈希（实际项目中应该从数据库获取）
const mockPasswords = {
  admin: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // password
  user: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // password
};

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();
    const { username, password } = body;

    // 验证输入
    if (!username || !password) {
      return NextResponse.json<LoginResponse>(
        {
          success: false,
          message: "用户名和密码不能为空",
        },
        { status: 400 }
      );
    }

    // 查找用户
    const user = mockUsers.find((u) => u.username === username);
    if (!user) {
      return NextResponse.json<LoginResponse>(
        {
          success: false,
          message: "用户名或密码错误",
        },
        { status: 401 }
      );
    }

    // 验证密码
    const hashedPassword =
      mockPasswords[username as keyof typeof mockPasswords];
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
      return NextResponse.json<LoginResponse>(
        {
          success: false,
          message: "用户名或密码错误",
        },
        { status: 401 }
      );
    }

    // 检查用户状态
    if (!user.isActive) {
      return NextResponse.json<LoginResponse>(
        {
          success: false,
          message: "账户已被禁用",
        },
        { status: 403 }
      );
    }

    // 生成JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    // 更新最后登录时间
    const updatedUser = {
      ...user,
      lastLoginAt: new Date().toISOString(),
    };

    return NextResponse.json<LoginResponse>({
      success: true,
      message: "登录成功",
      user: updatedUser,
      token,
    });
  } catch (error) {
    console.error("登录错误:", error);
    return NextResponse.json<LoginResponse>(
      {
        success: false,
        message: "服务器内部错误",
      },
      { status: 500 }
    );
  }
}
