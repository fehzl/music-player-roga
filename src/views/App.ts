import { html } from '~/utils';
import './App.css';
import { Album } from './components/Album/Album';
import { Player } from './components/Player/Player';

export function App() {
  return html`
    <div class="App">
      ${Album()}
      ${Album()}

      ${Player()}
    </div>
  `;
}
