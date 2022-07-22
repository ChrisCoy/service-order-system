export interface IUser {
  name: string;
  _id: string;
  isAdmin: boolean;
  role: string;
}

export interface IRole {
  _id: string;
  name: string;
}

export interface IUserComplete {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role?: IRole;
}
