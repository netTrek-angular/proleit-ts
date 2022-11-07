
import {App} from "./typescript/app";

const target = document.querySelector('body main');
if ( target ) {
  const app: App<HTMLElement> = new App ( target as HTMLElement );
}
