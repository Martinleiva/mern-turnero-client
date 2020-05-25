import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Home from './components/inicio/Home';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import SingUpCliente from './components/auth/SingUpCliente';
import SingUpDuenio from './components/auth/SingUpDuenio';
import ClientSearch from './components/search/ClientSearch';
import SearchResult from './components/search/SearchResult';
import DashOwner from './components/usuarios/DashOwner';
import MyEstablishments from './components/establishment/MyEstablishments';
import DashClient from './components/usuarios/DashClient';
import ReservationClient from './components/reservation/client/ReservationClient';

//Private Routes
import PrivateRouteOwner from './components/routes/PrivateRouteOwner';
import PrivateRouteClient from './components/routes/PrivateRouteClient';
import MixRoute from './components/routes/MixRoute';

//Context
import AlertState from './context/alerts/alertState';
import ModalState from './context/modal/modalState';
import EstablishmentState from './context/establishment/establishmentState';
import ReservationState from './context/reservations/reservationState';
import AuthState from './context/authentication/authState';

function App() {
  
  return (
    <AlertState>  
      <ModalState>
      <EstablishmentState>                    
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/singup" component={SingUp} />
                <Route exact path="/singup-client" component={SingUpCliente} />
                <Route exact path="/singup-duenio" component={SingUpDuenio} />
                <PrivateRouteClient exact path="/dash-client" component={DashClient} />
                <PrivateRouteClient exact path="/client-search" component={ClientSearch} />
                <MixRoute exact path="/search-result" component={SearchResult} />
                <Route exact path="/res-client" component={ReservationClient} />
                <PrivateRouteOwner exact path="/dash-owner" component={DashOwner} />
                <PrivateRouteOwner exact path="/my-establishments" component={MyEstablishments} />
              </Switch>
            </Router>
          </AuthState>        
      </EstablishmentState> 
      </ModalState>                   
    </AlertState>    
  );
}

export default App;
