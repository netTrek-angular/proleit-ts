export abstract class SimpleComp<T extends HTMLElement> {
  protected readonly elem: T;

  constructor( private readonly target: HTMLElement ) {
    this.elem = this.createElem ();
  }

  protected abstract createElem (): T;

  public render () {
    this.target.appendChild( this.elem );
  }

  public addEventListener<K extends keyof HTMLElementEventMap>
  (type: K, listener: ( evt: HTMLElementEventMap[K], ...arg: any[]) => void): void {
    this.elem.addEventListener( type, listener );
  }
}


export class DivComp extends SimpleComp<HTMLDivElement> {
  protected createElem(): HTMLDivElement {
    const elem = document.createElement('div');
    elem.innerHTML = `
    <strong>hello</strong> world
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem consequuntur, debitis dolorem eius fugit impedit ipsa labore, minus molestiae obcaecati quam quasi quibusdam rem saepe sequi sit ullam voluptatibus.</p>
    `
    return elem;
  }

}


export class ButtonComp extends SimpleComp<HTMLButtonElement> {

  set label(value: string) {
    this.elem.innerText = value;
  }

  constructor( label: string, target: HTMLElement ) {
    super(target);
    this.label = label;
  }

  protected createElem () {
    return document.createElement('button');
  }

}
