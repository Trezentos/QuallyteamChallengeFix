import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default (e) => {
    return (
        <div className='container global-structure'>
            <h1>Gerenciamento De Não Conformidades</h1>
           
            <Link to = '/conformities-list' className = 'menu-btn' >Mostrar não Conformidades <br/> Registradas</Link>
            <Link to = '/register' className='menu-btn'>Registrar não Conformidade</Link>
        </div>
    )
}


