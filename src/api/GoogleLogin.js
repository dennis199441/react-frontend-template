const axios = require('axios');

var GoogleLoginAPI = {
    getUsername: async function (token) {
        let url = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + token;
        return axios.get(url);
    }
};

export default GoogleLoginAPI;
