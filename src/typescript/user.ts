export interface User {
  id?: number | string;
  name: string;
  email: string;
  birthday?: Date;
}

export interface Address {
  zip: string;
  street: string;
}

export interface UserWithAddress extends User, Address {
}

export type UserWithAddress2 = User & Address;
