export type HeaderRoutType = {
  path: string;
  title: string;
};

// Typescript basics

// Types, Interfaces, Utility Types, Generics, Operators

type StringNumberOrNull = string | null | number;
const test1: StringNumberOrNull = 1;

type Falsy = undefined | null | '' | 0;
const test2: Falsy = '';

type UserRoles = 'admin' | 'user' | 'anonim' | 'superadmin';

const getUserPermissionsByType = (permission: UserRoles) => {
  const permissions = {
    admin: 1,
    user: 1,
    anonim: 0,
    superadmin: 1,
  };

  return permissions[permission];
};

const permission: UserRoles = 'anonim';
getUserPermissionsByType(permission);

// and
// &

type DefaultUser = {
  id: string;
  name: string;
};

// union type
type AdminUser = DefaultUser & {
  isAdmin: true;
};

const user1: DefaultUser = {
  id: '1',
  name: 'string',
};

const user2: AdminUser = {
  id: '2',
  name: 'string2',
  isAdmin: true,
};

// Optional types

type DataType = {
  users: string[];
  posts: string[];
  page?: number;
};

const data1: DataType = {
  users: [],
  posts: [],
  page: 1,
};

const data2: DataType = {
  users: [],
  posts: [],
};

// Home Work

// Завдання: у файлі types.ts створіть:
// - Тип MyBoolean з значеннями true АБО false
// - Тип UserWithDeclarations з даними declarations - масив строк, який наслідує тип DefaultUser

type MyBoolean = true | false;

type UserWithDeclarations = DefaultUser & {
    declarations: string[];
};

const user: UserWithDeclarations = {
    declarations: [],
    id: "1",
    name: "name",
}