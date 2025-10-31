import './style.css';
import { html, renderView, view } from 'mates';
import { Counter } from './counter';
const App = () => {
  return () => html`${view(Counter)}`;
};

renderView(App, document.getElementById('app') as HTMLElement);
