import GoogleLoginAPI from './GoogleLogin';

var AuthService = {
    isLoggedIn: () => {
        let auth = localStorage.getItem('Authentication');
        if (auth) {
            let authObj = JSON.parse(auth);
            if(authObj.expires_at > Date.now()) {
                return true;
            } else {
                localStorage.removeItem('Authentication');
            }
        }
        return false;
    },
    
    getUser: async () => {
        let auth = localStorage.getItem('Authentication');
        if(!auth) {
            return null;
        }
        let authObj = JSON.parse(auth);
        let tokenId = authObj.id_token;
        return GoogleLoginAPI.getUsername(tokenId);
    }
};

export default AuthService;
