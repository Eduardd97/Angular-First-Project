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
  id: '1',
  name: 'name',
};

//----------------------------------------------------------- //

interface PostInteface {
  id: string;
  title: string;
  text: string;
  liked: number;
}

interface DeletedPostInterface extends PostInteface {
  isDeleted: boolean;
}

// extends
// implements

type Str = string;

class MyClass implements PostInteface {
  id = '';
  liked = 1;
  text = '';
  title = '';
}

type A = {
  a: number;
};

type B = A & { b: number };

// & | - not works with inteface

// UTILY TYPES

type UsersData = {
  users?: string[];
  posts?: string[];
};

type RequiredType = Required<{ a?: number }>;

const saveData = (usersData: Required<UsersData>) => {
  // if (usersData.posts) {
  //     // ...
  // }
  // if (usersData.users) {
  //     // ...
  // }
};

type PostDataType = {
  title: string;
  id: string;
  likes: number;
};

const PostData: Partial<PostDataType> = {};

// Partial  - makes all the fields of the object optional
// Required - makes all the fileds of the object required

type InvoiceType = {
  address: string;
  amount: number;
  id: string;
  customer: string;
};

const word: 'hello' | 'goodbuye' = 'hello';

const mainInvoiceData: Pick<InvoiceType, 'amount' | 'customer' | 'id'> = {
  amount: 1,
  customer: '',
  id: '',
};

const mainInvoiceDataNoCustomer: Omit<InvoiceType, 'customer' | 'id'> = {
  address: '',
  amount: 10,
};

// Pick - gets couple of fields from any type
// Omit - removes couole of fileds from any type

// Завдання:
type Car = {
  price: number;
  color: string;
  name: string;
  speed: number;
};

type CarPriceOnlyType = Pick<Car, 'price'>;

const showThePrice = (carWithPriceOnly: CarPriceOnlyType) => {
  console.log(`The price of the car is ${carWithPriceOnly.price}`);
};

type CarWithSpeedAndNameType = Omit<Car, 'price' | 'color'>;

const showTheSpeed = (carWithSpeedAndName: CarWithSpeedAndNameType) => {
  console.log(
    `The speed of the car ${carWithSpeedAndName.name} is ${carWithSpeedAndName.speed}`
  );
};

// Типізувати аргументи функцій
type CoordsType = {
  x: number;
  y: number;
  z: number;
};

// Record<string, string>
const coords: Record<'x' | 'y' | 'z', number> = {
  x: 0,
  y: 0,
  z: 0,
};

function main(a: number) {
  if (a > 10) {
    return 1;
  } else {
    return 0;
  }
}

// typeof ""
// typeof 10
// typeof main

const mainResult: ReturnType<typeof main> = 0;

const first = () => 11;

const second = (firstResult: ReturnType<typeof first>) => {};

const firstResult = first();
second(firstResult);

class UserClass {
  name: string = '';
  age: number = 0;
}

new UserClass();

const aClassInstance: InstanceType<typeof UserClass> = {
  name: '',
  age: 10,
};

// Generic

type Union<T1, T2> = T1 & T2;

const coordA = { a: 10 };
const coordB = { b: 11 };

type CoordAType = { a: number };
type CoordBType = { b: number };

const coordAAndB: Union<CoordAType, CoordBType> = {
  a: 1,
  b: 2,
};

// Home Work

// Завдання:
// type MainType = Record<'a'|'b', string>
// const obj: MainType = {a:'1', b: '1'}

// const obj2 = {a: '2', b: '2', c:'2'};
// const obj3 = {a: '3'}
// const obj4 = {a: 4}
// типізуйте obj,2,3,4, використовуючи похідні від MainType та Utility

type MainType = Record<'a'|'b', string>
const obj: MainType = {a:'1', b: '1'}

const obj2: MainType & { c: string } = {a: '2', b: '2', c:'2'};
const obj3: Pick<MainType, 'a'> = {a: '3'};
const obj4: Partial<Record<'a', string | number>> = {a: 4};


