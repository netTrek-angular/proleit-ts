export class Interactive  {

  constructor( private readonly label: string ) {

  }

  private getElem () {
    const btn = document.createElement('button');
    btn.innerText = this.label;
    return btn;
  }

  public render ( target: HTMLElement ) {
    target.appendChild( this.getElem() );
  }

}
