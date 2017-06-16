import React, { Component } from 'react';
import Metric from '../components/Metric';
import TenantList from '../components/TenantList';
import Total from '../components/Total';
import Breadcrumb from '../components/Breadcrumb';
import { tenants } from '../api/tenants';

const styles = {
    container: {
        width: '1000px',
    },
    total: {
        float: 'left',
    },
    metric: {
        float: 'right',
    },
    list: {
        clear: 'both',
    }
}

class TenantContainer extends Component {
    constructor(){
        super();
        this.state = {
            metric: 'cores'
        }
    this.handleMetric = this.handleMetric.bind(this);
    }
    handleMetric(e){
        this.setState({metric: e.target.value})
    }
    render() {
        const total = tenants.reduce((sum, tenant) => {
            const tenantSum = tenant.clusters.reduce((sum, cluster) => {
                if (this.state.metric === 'cores') sum += cluster.cores;
                if (this.state.metric === 'pods') sum += cluster.pods;
                if (this.state.metric === 'RAM') sum += cluster.RAM;
                return sum;
            }, 0);
            return sum += tenantSum;
        }, 0);
        console.log(total);
        return (
            <div style={styles.container}>
                <Breadcrumb />
                <div style={styles.total}>
                    <Total total={total} metric={this.state.metric} />
                </div>
                <div style={styles.metric}>
                    <Metric changeMetric={this.handleMetric} />
                </div>
                <div style={styles.list}>
                    <TenantList tenants={tenants} metric={this.state.metric}/>
                </div>
            </div>
        )
    }
}

export default TenantContainer