import React, { Component } from 'react';
import Metric from '../components/Metric';
import TenantList from '../components/TenantList';
import Total from '../components/Total';
import Breadcrumb from '../components/Breadcrumb';
import { nodes, getNodes } from '../api/nodeData';
import { browserHistory, Link } from 'react-router'

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
        this.tenants;
    }

    componentWillMount(){
        getNodes().then((nodes) => {
            console.log(nodes);
        });
        let clusters = {};
        // let nodes = [];
        nodes.forEach(node => {
            if (!clusters[node.regionalCluster]) {
                clusters[node.regionalCluster] = {};
                clusters[node.regionalCluster].cores = 0;
                clusters[node.regionalCluster].pods = 0;
                clusters[node.regionalCluster].RAM = 0;
                clusters[node.regionalCluster].status = 'True';
                clusters[node.regionalCluster].tenant = node.tenant;                
            }
            clusters[node.regionalCluster].cores += node.cores;
            clusters[node.regionalCluster].pods += node.pods.length;
            clusters[node.regionalCluster].RAM += node.RAM;
            if (node.status === 'False') {
                clusters[node.regionalCluster].status = 'False';
            }
        });
        let cluster_arr = [];
        for (let i in clusters){
            const cluster = {name: i, ...clusters[i]};
            cluster_arr.push(cluster);
        }
        let tenants = {};
        cluster_arr.forEach(cluster => {
            if (!tenants[cluster.tenant]) {
                tenants[cluster.tenant] = [];
            }
            tenants[cluster.tenant].push(cluster);
        });
        let tenant_arr = [];
        for (let i in tenants){
            const tenant = {name: i, clusters: tenants[i]};
            tenant_arr.push(tenant);
        }
        console.log(tenant_arr);
        this.tenants = tenant_arr;
    }

    handleMetric(e){
        this.setState({metric: e.target.value})
    }
    handleSelectCluster(clusterName){
        browserHistory.push(clusterName);
    }
    render() {
        console.log(this.tenants);
        const total = this.tenants.reduce((sum, tenant) => {
            console.log(tenant);
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
                <Breadcrumb>
                    <Link to='/'>Home </Link>
                </Breadcrumb>
                <div style={styles.total}>
                    <Total total={total} metric={this.state.metric} />
                </div>
                <div style={styles.metric}>
                    <Metric changeMetric={this.handleMetric} />
                </div>
                <div style={styles.list}>
                    <TenantList 
                        tenants={this.tenants} 
                        metric={this.state.metric} 
                        select={this.handleSelectCluster}
                    />
                </div>
            </div>
        )
    }
}

export default TenantContainer