import React from 'react';

function header( {text} ){
    return (
        <header>
            <div className = 'header-div'>
                <h1>TUTunes {text} </h1>
            </div>
        </header>
    )
}
export default header;