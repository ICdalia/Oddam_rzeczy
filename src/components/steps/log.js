import { useState } from 'react';

const MyComponent = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);



    const handleLogin = () => {
        setToken('Nowy token');
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <div>
            <p>Token: {token}</p>
            <p>IsAuthenticated: {isAuthenticated ? 'true' : 'false'}</p>
            <p>Loading: {loading ? 'true' : 'false'}</p>
            <p>User: {user}</p>

            <button onClick={handleLogin}>Zaloguj</button>
            <button onClick={handleLogout}>Wyloguj</button>
        </div>
    );
};

export default MyComponent;