import {RoleType} from "./typescript/role";
import {Address, User, UserWithAddress, UserWithAddress2} from "./typescript/user";
import {ClassMemberKind} from "@angular/compiler-cli/src/ngtsc/reflection";

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
  mail: 'us@netTrek.de'
}



function clone<T extends Usr> ( source: T ): T {
  return {...source};
  // return Object.assign({}, source);
}

const address: Address = {
  zip: 'asd',
  street: 'asd'
}

const usrClone = clone( usr );
// invalid weil address nicht von Usr ableitet
// const addressClone = clone( address );

type UserID = Usr['id'];

function getVal<T, U extends keyof T> ( source: T, propKey: U ): T[U] {
  return source[propKey];
}

console.log( getVal( address, 'zip') )
console.log( getVal( usr, 'name') )


console.log( Object.keys( usr ) );



let usrInfo = {id: 123, name: 'saban', address: {zip: 123}};
// let usrWithMail = Object.assign( {}, usr, {mail: 'us@netTrek.de'} )
let usrWithMail = {...usrInfo, mail: 'us@netTrek.de', id: 333};

let list: number[] = [1,2,3];

let listClone = [...list];
listClone [0] = 99;

let extList = [0, ...list, 4,5,6]

function logValues ( ...args: number[] ) {
  args.forEach( value => console.log ( value ) )
}

// logValues( 1,2,3 );

logValues( ...extList );

let test = {
  list: [1,2,3,4, -1 ],
  trigger: function ( ...args: number[] ) {
    console.log( [...args, ...this.list ] )
  }
}
test.trigger( 0, 1, 3, 4  );

class Test {
  list = [1,2]
}

const t = new Test();
test.trigger.call( t, ...extList );

const data = {col1: 1, col7: 7, col6: 6, col5: 5, col2: 2, col3: 3, col4: 4 }
const {col1, col7} = data;

function listVals ( [ firstVal, secVal ]: number[] ) {
  console.log( firstVal, secVal, (secVal ?? 99) + firstVal )
  // debugger
}
//
// function listVals ( data: number[]) {
//   const firstVal = data[0];
//   const secVal = data[1];
//   debugger
// }

listVals ( [1, 2] )

