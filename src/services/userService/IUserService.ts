export interface IUserService {
  login: string;
  password: string;
}

export interface IUserInfo {
  id: number
  login: string
  password: string
  role: 'User' | 'Admin'
}