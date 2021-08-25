import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="João" sobrenome="Bastos">
            <Filho nome="Kauan" />
            <Filho nome="Pedro" />
            <Filho nome="Alice" />
        </Pai>
    </div>    
, document.getElementById('root'))