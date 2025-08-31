// 用户类型
export interface User {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  role: "admin" | "user";
  isActive: boolean;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

// 登录请求类型
export interface LoginRequest {
  username: string;
  password: string;
}

// 统一响应格式
export interface ApiResponse<T = any> {
  status: number;
  message: string;
  data: T;
}

// 登录响应数据类型
export interface LoginResponseData {
  user: User;
  token: string;
}

// 认证状态类型
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
