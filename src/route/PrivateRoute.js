import {useKeycloak} from "@react-keycloak/web";
import Forbidden from "../screen/Forbidden";

const PrivateRoute = ({children,props}) => {
    const {keycloak} = useKeycloak();
    const isLoggedIn = keycloak.authenticated;
    const isHasRole = keycloak.hasResourceRole(props.menuName)
    return isLoggedIn && isHasRole ? children : <Forbidden/>;
};

export default PrivateRoute;