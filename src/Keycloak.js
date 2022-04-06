import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "YOUR_HOST/auth",
    realm: "YOUR_REALM",
    clientId: "YOUR_CLIENT",
});

export default keycloak;