import React, { useContext } from 'react';
import {userContext} from './context/userContext';

const Count = () => {
    const [user, updateCount] = useContext(userContext);
    return (
        <div>
            <p>Normal count :: ={user?.count}</p>
            <button onClick={()=>updateCount(1)}>Inc</button>
        </div>
    )
}

export default Count