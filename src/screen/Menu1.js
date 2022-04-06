import React, {useEffect} from 'react';
import {useKeycloak} from "@react-keycloak/web";

const Menu1 = () => {
    const [state, setState] = React.useState({
        keycloakProfile: {},
    })
    const {initialized, keycloak} = useKeycloak()

    useEffect(() => {
        userProfile();
    }, []);

    const userProfile = () => {
        keycloak.loadUserProfile().then(result => {
            setState({
                ...state,
                keycloakProfile: result
            });
        });
    }

    return (
        <div>
            This is Menu1 belong to {state.keycloakProfile?.username?? ''}
            <button onClick={() => userProfile()}>
                press
            </button>
        </div>
    );
};

export default Menu1;