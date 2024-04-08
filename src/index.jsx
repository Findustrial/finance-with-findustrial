/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'

document.querySelectorAll('.finance-with-findustrial').forEach(el => {
  const dataStyle = el.getAttribute('data-style') || 'default';
  render(() => <App style={dataStyle} />, el)
})

