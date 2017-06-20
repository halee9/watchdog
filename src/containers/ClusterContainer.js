import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Node from '../components/Node';
import { nodes } from '../api/nodeData';

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

class ClusterContainer extends Component {
    constructor(){
        super();
        this.nodes = [];
    }

    componentWillMount(){
        const clusterName = this.props.params.clusterName;
        let nodeList = [];
        nodes.forEach(node => {
            if (node.regionalCluster === clusterName) {
                nodeList.push(node);
            }
        })
        this.nodes = nodeList;
    }

    render() {
        return (
            <div style={styles.container}>
                <Breadcrumb />
                { this.nodes.map(node => <Node name={node.name} />) }
            </div>
        )
    }
}

export default ClusterContainer