import React, { useContext } from 'react';
import {userContext} from './context/userContext';

const AnotherComp = () => {
    const [user, updateCount] = useContext(userContext);
    return (
        <div>
            <userContext.Consumer>
                {(state)=>(
                    <>
                        <p>Another count :: = {user?.count}</p>
                        <button onClick={()=>updateCount(-1)}>Dec</button>
                    </>
                )
                }

            </userContext.Consumer>
        </div>
    )
}

export default AnotherComp