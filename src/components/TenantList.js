import React from 'react';
import Tenant from './Tenant';

const TenantList = ({tenants, metric}) => {
    // console.log(tenants);
    return (
    <div>
        { 
            tenants.map( tenant => {
                return (
                    <Tenant 
                        key={tenant.name} 
                        name={tenant.name} 
                        clusters={tenant.clusters} 
                        metric={metric}
                    />
                )
            })
        }
    </div>
)
}

export default TenantList;
