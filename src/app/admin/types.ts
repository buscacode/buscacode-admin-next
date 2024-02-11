export type Nill = null | undefined

export type LoginCredentials = {
  username: string,
  password: string,
}

export type LoginResponseBody = {
  message: string,
  token: string,
  username: string,
}

export type UserRegister = {
  name: string,
  lastname: string,
} & LoginCredentials

export type Role = {
  id: number,
  name: string,
  label: string | undefined,
  importanceOrder: number,
}

export type UserCreator = {
  id: number,
  username: string,
  lastname: string,
  name: string,
  email: string | Nill,
  isEnabled: boolean
}

export type User = UserCreator & {
  roles: Role[],
}
