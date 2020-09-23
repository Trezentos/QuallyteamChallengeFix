export default (state, action) => {

    
    switch(action.type) {
      case 'DELETE_NOTCONFORMITIE':
        return {
          ...state,
          notConformities: state.notConformities.filter(notConformitie => notConformitie.id !== action.payload)
        }
      case 'ADD_NOTCONFORMITIE':
        return {
          ...state,
          notConformities: [action.payload, ...state.notConformities],    
        }
        case 'ADD_CORRECTIVE_ACTION':
          return{
            ...state,
            notConformities: state.notConformities.map(notConformitie =>{
              if(notConformitie.id == action.payload.id){
                
                return Object.assign(notConformitie, {correctiveAction:action.payload})
                
              }else{
                return notConformitie
              }
            })
          }     
      default:
        return state;
    }
  }