import React,{useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState.jsx'
import backIcon from '../../svg/backIcon.svg'
import {Link} from 'react-router-dom'
import './index.css'


export default  e =>{
    const {notConformities, deleteNotConformitie} = useContext(GlobalContext)
 
    const notConformitiesCards = notConformities
        .sort((a, b)=>  {
            return  new Date(b.date).getTime()  - new Date(a.date).getTime()

        })
        .map((notConformitie, index)=>{
            return (
                <div className='notConformitie-card' key={index} >
                    <div className='header'>
                <h3 > {notConformitie.date} </h3>
                <h3>Departamento: {notConformitie.departament || 'Quality'} </h3>
                </div>
                <div className="description">
                <h3> 
                    {notConformitie.description}
                </h3>
                <Link  to={{
                        pathname : "/corrective-action",
                        state : {id:notConformitie.id,
                                notConformitie,
                                correctiveAction:notConformitie.correctiveAction}
                        }}
                        className='card-btn'>
                    Ação Corretiva
                    </Link> 
                    <a onClick = { ()=> deleteNotConformitie(notConformitie.id)}  className='card-btn' >Apagar</a>
                </div>
                </div>
            )})  
           
    return(
        <div className='container global-structure'>
             <div className="list-header">
              <Link  to="/"><img className='back-icon-img' src= {backIcon} alt="back Icon"/></Link>
              
             </div>
           <div className = 'notConformitie-cards'> 
            { (notConformitiesCards.length === 0)?
            <h2 className = 'intro-text'>Nenhuma não conformidade registrada... Registre-as!</h2>
            :notConformitiesCards }
                   
          </div>
        </div>
    )

}

