export type CurrentUser = {
    id: string;
    fullname: string;
    email: string;
    role: Role;
}

export type IPermissionUser = {
  id: number;
  name: string;
  subject: string;
}

export type Role = {
  id: number;
  name: string;
  permissions?: IPermissionUser[];
}