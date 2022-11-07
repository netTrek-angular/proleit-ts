export class Interactive  {
  private btn!: HTMLButtonElement;
  constructor( private readonly label: string ) {
    this.createElem();
  }

  private createElem () {
    this.btn = document.createElement('button');
    this.btn.innerText = this.label;
  }

  public render ( target: HTMLElement ) {
    target.appendChild( this.btn );
  }

  public addEventListener<K extends keyof HTMLElementEventMap>
    (type: K, listener: ( evt: HTMLElementEventMap[K], ...arg: any[]) => void): void {
      this.btn.addEventListener( type, listener );
  }

}
