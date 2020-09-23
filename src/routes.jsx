import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import ConformitiesMenu from './pages/ConformitiesMenu';
import ConformitieForm from './pages/ConformitieForm';
import ConformitiesList from './pages/ConformitiesList';
import CorrectiveAction from './pages/CorrectiveAction';



function Routes(){

    return( 
        <BrowserRouter >
                    
            <Route exact path= '/'  component={ConformitiesMenu}  />

            <Route exact path= '/register' component={ConformitieForm} />

            <Route exact path= '/conformities-list' component={ConformitiesList} />
           
            <Route exact path = '/corrective-action' component = {CorrectiveAction} />

       </BrowserRouter>
    );

}

export default Routes;