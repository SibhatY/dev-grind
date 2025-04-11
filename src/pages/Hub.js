import React from "react";
import {Link} from 'react-router-dom';

const Hub = () => {

    return (

        <div>
            <h2>The Terminal</h2>
            <p>Welcome!</p>
            <ul>
                <li><Link to='/challenges'>Hunt some Bugs</Link></li>
                <li><Link to='/profile'>View Codex</Link></li>
            </ul>
        </div>
    );
};

export default Hub;