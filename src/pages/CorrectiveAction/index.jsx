import React,{useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import backIcon from '../../svg/backIcon.svg'
import {GlobalContext} from '../../context/GlobalState.jsx'
import './index.css'


export default props =>{
    
    const {addCorrectiveAction, } = useContext(GlobalContext)
    const {id,correctiveAction} = props.location.state

    const [whatToDo, setWhatToDo] = useState( (correctiveAction)?correctiveAction.whatToDo : '' )
    const [howToDo, setHowToDo] = useState((correctiveAction)?correctiveAction.howToDo : '')
    const [whereToDo, setWhereToDo]= useState((correctiveAction)?correctiveAction.whereToDo : '')
    const [whenToDo, setWhenToDo] = useState((correctiveAction)?correctiveAction.whenToDo : '')


    const correctiveActionsObj = {
        id,
        whatToDo,
        howToDo,
        whereToDo,
        whenToDo 
    }
    
    const onSubmit = e =>{

        if( isNaN(Date.parse(whenToDo))  ){

            return alert('Data inválida')
        }

        addCorrectiveAction(correctiveActionsObj)       
        alert('Salvo!')

    }


    return(
        
        <div className='container global-structure'>
         <div className="corrective-action-structure">
         <div className="header">
             <Link  to="/conformities-list"><img className='back-icon-img' src= {backIcon} alt="back Icon"/></Link>
         </div>
            
            <div className="action-form">
                <h2>Oque fazer</h2>
                <textarea value = { whatToDo } onChange = {(e)=> setWhatToDo(e.target.value)} />

                <h2>Por que fazer</h2>
                <textarea value = {howToDo } onChange = {(e)=> setHowToDo(e.target.value)} />

                <h2>Onde fazer</h2>        
                <textarea value = {whereToDo} onChange = {(e)=> setWhereToDo(e.target.value)} />

                <h2>Até Quando</h2>
                <input type ='date' value = {whenToDo} onChange ={ (e)=> setWhenToDo(e.target.value) } /> 

                <a onClick = {onSubmit} className = 'form-btn'>Salvar Ação</a >
            </div>

            </div>
        </div>       
    )
}