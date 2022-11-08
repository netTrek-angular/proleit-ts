
import {App} from "./typescript/app";

const target = document.querySelector('body main');
if ( target ) {
  const app: App<HTMLElement> = new App ( target as HTMLElement );
}

function logMe ( level: 'log' | 'warn' | 'error' = 'log') {
  return function ( target: unknown, propertyKey: string, descriptor: PropertyDescriptor ) {
    const original = descriptor.value;
    descriptor.value = function () {
      const val = original.apply ( this, arguments );
      console[level].call ( this, 'log aus ' + propertyKey + ' := ' + val.toString() );
      /*
      switch ( level ) {
        case "log":
          console.log('log aus ' + propertyKey + ' := ' + val.toString() );
          break;
        case "warn":
          console.warn('log aus ' + propertyKey + ' := ' + val.toString() );
          break;
        case "error":
          console.error('log aus ' + propertyKey + ' := ' + val.toString() );
          break;
        default:
          throw  new Error( 'unknown log level' );
      }
      */
      return val;
    }
  }
}



class Human {


  static TYPE = 'Mensch';

  // private name = 'Saban'; // nur in dieser Klasse
  protected age = 0; // nur in dieser Klasse und in den erbenden Klassen

  constructor( private name: string = 'Saban' ) {
    // console.log('human')
  }

  @logMe( 'error' )
  sagMirDeinenNamen (): string {
    return this.name;
  }

}

class Man extends Human {
  get wifeName(): string {

    return this._wifeName;
  }

  set wifeName(value: string) {

    this._wifeName = value;
  }

  private _wifeName: string = '';

  constructor( name?: string ) {
    super( name );
    // console.log('man')
    this.init ();
  }


  override sagMirDeinenNamen(): string {
    return super.sagMirDeinenNamen() + '____';
  }

  private init() {
    this.age = 123;
  }
}

const h = new Human('human');
const m = new Man( 'man' );

console.log( h.sagMirDeinenNamen() );
console.log( m.sagMirDeinenNamen() );

m.wifeName = 'heike'
// console.log( m.wifeName );

Human.TYPE = 'Frau'
