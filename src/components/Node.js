import React from 'react';

const Node = ({ name, onClick }) => {
    return (
        <div onClick={() => onClick(name)}>
            { name }
        </div>
    )
}

export default Node;
