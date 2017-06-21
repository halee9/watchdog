import React from 'react';

const Breadcrumb = ({ children }) => {
    let newChildren = [];
    if (children.length > 1){
        newChildren.push(children.slice(0,1));
        children.slice(1).forEach(child => {
            newChildren.push(<span> > </span>); 
            newChildren.push(child); 
        });
    }
    else {
        newChildren = children;
    }
    console.log(newChildren);
    return (
        <div style={styles.container}>
            { newChildren }
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        lineHeight: '200%',
        border: '1px solid #000',
        margin: '10px',
        paddingLeft: '10px',
    }
}

export default Breadcrumb;