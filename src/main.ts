import {RoleType} from "./typescript/role";
import {Address, User, UserWithAddress, UserWithAddress2} from "./typescript/user";

let usernamne: string = 'saban';
let usrId: number = 123;
let isAdmin: boolean = true;

const birthdate: Date = new Date( '04-11-1973');

// const kann nicht überschrieben werden
// birthdate = new Date();

// typesicher
// usrId = '333';

// listen haben immer einen Typ
const person: Array<string> = []; //old school
const userList: string[] = [];

userList.push( 'saban' );

enum Role {
  ADMIN,
  GUEST
}

let role: 'admin' | 'guest' = 'admin';

let userRole: Role = Role.ADMIN;

let usrRole: RoleType = 'admin';

let user: User = {
  id: 123,
  // birthday: new Date(),
  name: 'saban',
  email: 'us@netTrek.de'
}

function ssrHelper ( user: User ) {
  if ( user.id ) {
    if ( typeof user.id === 'string') {
      // hier ist user.id def. ein string
    } else {
      // hier ist user.id def. ein number
    }
  }
}
/*

class Customer implements User{
  birthday?: Date;
  email!: string;
  id?: number | string;
  name!: string;

  constructor( email: string, name: string ) {
    this.email = email;
    this.name = name;
  }
}
*/

// class Customer implements User, Address {
class Customer implements UserWithAddress {
// class Customer implements UserWithAddress2 {

  id?: number | string;
  birthday?: Date;


  constructor(
      public email: string,
      public name: string,
      public street: string,
      public zip: string,
  ) {
  }

}

const c = new Customer( 'us@netTrek.de', 'saban', 'ov', '46282');


function sample1 ( param: {id: number, name?: string } ) {
  if ( param.name ) {
    console.log('name was def. ', param.name );
  }
}

interface Usr {
  id: number;
  name: string;
}



interface Usr2 {
  id: number;
  name: string;
  mail: string;
}

const usr: Usr = {
  id: 123,
  name: 'saban'
}

const usr2: Usr2 = {
  id: 123,
  name: 'saban',
  mail: 'usnetTrek.de'
}



function clone<T extends Usr> ( source: T ): T {
 return {...source};
 // return Object.assign({}, source);
}

const usrClone = clone( usr2 );

type UserID = Usr['id'];

function getVal<T, U extends keyof T> ( source: T, propKey: U ): T[U] {
  return source[propKey];
}

console.log( getVal( usr, 'id') )
console.log( getVal( usr, 'name') )


console.log( Object.keys( usr ) );
