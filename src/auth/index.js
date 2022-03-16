const API = 'http://localhost:3001/api/v1/';

export const signup = users => {
    return fetch(`${API}user/register`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    }).then(response => {
        return response.json()
    }).catch(err => { 
        console.log(err)
    });
};


export const signin = users => {
    return fetch(`${API}user/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    }).then(response => {
        console.log(response);
        return response.json()
    }).catch(err => { 
        console.log(err)
    });
};


export const authenticate = (data, next) => {
    if( typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data))
        next();
    }
};

export const isAuthenticated = () => {
    if(typeof window == 'undefined') {
        return false ;
    }
    if (localStorage.getItem('jwt'))
    {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
       return false ;
    }
};

