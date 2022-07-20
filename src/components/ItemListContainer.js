import React from 'react';
import '../App.css';

function ItemListContainer({ greeting }) {
    return (
        <div className='container mt-4'>
            <p>
                {greeting}
            </p>
        </div>
    );
}

export default ItemListContainer;