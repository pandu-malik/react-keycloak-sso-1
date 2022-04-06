import React from "react";
import './App.css';
import Nav from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./screen/Login";
import Menu1 from "./screen/Menu1";
import Menu2 from "./screen/Menu2";
import Menu3 from "./screen/Menu3";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./Keycloak";
import PrivateRoute from "./route/PrivateRoute";
import {useEffect} from "react";
import {useKeycloak} from "@react-keycloak/web";


const App = () => {
    // const {keycloak} = useKeycloak();
    // const [state, setState] = React.useState({
    //     keycloak: null,
    // })
    //
    // useEffect(() => {
    //     setState({
    //         ...state,
    //         keycloak: keycloak.isAuthenticated
    //     })
    // })
    return (
        <div className="App">
            <ReactKeycloakProvider authClient={keycloak}>
                <Nav/>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Login/>}/>
                        <Route path="/menu-1" element={
                            <PrivateRoute props={{menuName: "menu1"}}>
                                <Menu1/>
                            </PrivateRoute>
                        }/>
                        <Route path="/menu-2" element={
                            <PrivateRoute props={{menuName: "menu2"}}>
                                <Menu2/>
                            </PrivateRoute>
                        }/>
                        <Route path="/menu-3" element={
                            <PrivateRoute props={{menuName: "menu3"}}>
                                <Menu3/>
                            </PrivateRoute>
                        }/>
                    </Routes>
                </BrowserRouter>
            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
