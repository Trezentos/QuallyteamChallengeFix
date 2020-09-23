import React,{useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {GlobalContext} from '../../context/GlobalState.jsx'
import backIcon from '../../svg/backIcon.svg'



import './index.css'

export default e =>{
    const { addNotConformitie, notConformities } = useContext(GlobalContext)
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(Date.UTC(2020,6,11))
    const [departament, setDepartament] = useState('Quality')

    const onSubmit = e =>{
        e.preventDefault()

        if(description === ''){      
            
            return alert('Descrição Inválida')
        }

        if( isNaN(Date.parse(date))  ){
            
            return  alert('Data inválida')

        }

        //Converting the default date from HTML to our app
        setDate(new Date( `${date.slice(0,4)}-${date.slice(5,7)}-${date.slice(8,11)}` ))
             
        const newNotConformitie = {
            id: Math.floor(Math.random() * 100000000),
            description,
            date,
            departament
        }
        
        addNotConformitie(newNotConformitie)
        alert('Registrado com Sucesso')
        setDate('');
        setDepartament('');
        setDescription('');
    }


    return(
        <div  className='container global-structure' >      

         <div className='form-structure'>     
            <div className= 'header'>
               <Link  to="/"><img className='back-icon-img' src= {backIcon} alt="back Icon"/></Link>
            </div>

            <div className='register-form'>
                <h1 >Registrar não Conformidade</h1>
                            
                <h2>Descrição</h2>
                <textarea value = {description} onChange = {(e)=> setDescription(e.target.value)}  />

                <h2>Data de ocorrência</h2>
                <input value = {date} onChange ={ (e)=> setDate(e.target.value) } type='date'  />

                <h2>Departamentos</h2>
                    <select value= {departament} onChange={ (e)=> setDepartament(e.target.value) } >
                    <option value="Quality">Quality</option>
                    <option value="Sales">Sales</option>
                    <option value="Management">Management</option>                  
                </select>

                <a onClick = {onSubmit} className = 'form-btn'>Registrar!</a >
            </div>
            

         </div >
        </div>
    )

}
