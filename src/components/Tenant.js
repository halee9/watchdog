import React from 'react';
import RCContainr from './RCContainer';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const Tenant = ({name, clusters, metric}) => (
    <div style={styles.container}>
        <div>{name}</div>
        { clusters.map((item, index) => 
            (<RCContainr key={index} 
                name={item.name} 
                cores={item.cores}
                pods={item.pods}
                RAM={item.RAM}
                metric={metric}
            />)
        ) }
    </div>
)

export default Tenant;