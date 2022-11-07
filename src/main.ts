
import {App} from "./typescript/app";

const target = document.querySelector('body main');
if ( target ) {
  const app: App<HTMLElement> = new App ( target as HTMLElement );
}


class Human {


  static TYPE = 'Mensch';

  // private name = 'Saban'; // nur in dieser Klasse
  protected age = 0; // nur in dieser Klasse und in den erbenden Klassen

  constructor( private name: string = 'Saban' ) {
    console.log('human')
  }

}

class Man extends Human {

  constructor() {
    super();
    console.log('man')
    this.init ();
  }

  private init() {
    this.age = 123;
  }
}

const h = new Human();
const m = new Man();



Human.TYPE = 'Frau'
