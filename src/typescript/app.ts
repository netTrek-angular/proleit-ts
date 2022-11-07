import {Interactive} from "./interactive";

export class App<T extends HTMLElement> {
  private h1!: HTMLHeadingElement;
  private myBtnInter!: Interactive;

  constructor( public readonly target: T) {
    console.log( this.target );
    this.init ();
  }

  private init() {
    this.setupHeader();
    this.setupButton ();
  }

  private setupHeader() {
    this.h1 = this.target.querySelector('h1') as HTMLHeadingElement;
    this.h1.style.color = 'red';
  }

  private setupButton() {
    this.myBtnInter = new Interactive( 'hello world' );
    this.myBtnInter.render( this.target );
  }
}
