import React from 'react'

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>,
    <h3 key='h3'>Nice to meet you</h3>
]

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>