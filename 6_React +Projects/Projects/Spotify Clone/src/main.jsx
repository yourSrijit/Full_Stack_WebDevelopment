import { render } from 'preact'
import App from "./app.jsx"
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import PlayerContextProvider, { PlayerContext } from './context/PlayerContext.jsx'

render(
    <BrowserRouter>
    <PlayerContextProvider>
    <App/>
    </PlayerContextProvider>
     
     </BrowserRouter>
     , document.getElementById('app'))
