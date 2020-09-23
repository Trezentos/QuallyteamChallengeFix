import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.jsx';

const initialState = {
    notConformities : []
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function deleteNotConformitie(id) {
        dispatch({
          type: 'DELETE_NOTCONFORMITIE',
          payload: id
        });
      }
    
      function addNotConformitie(notConformitie) {
        dispatch({
          type: 'ADD_NOTCONFORMITIE',
          payload: notConformitie
        });      
        
      }

      function addCorrectiveAction(correctiveAction){
        dispatch({
          type : 'ADD_CORRECTIVE_ACTION',
          payload: correctiveAction
        });

      }

      
    

      return (<GlobalContext.Provider value={{
        notConformities: state.notConformities,
        deleteNotConformitie,
        addNotConformitie,
        addCorrectiveAction
        
      }}>
        {children}
      </GlobalContext.Provider>);

}