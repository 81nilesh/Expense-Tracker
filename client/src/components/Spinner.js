import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <>
            <div className='d-flex justify-content-center loader-container'>
                <div className="loader"></div>
            </div>
        </>
    );
}

export default Spinner;
