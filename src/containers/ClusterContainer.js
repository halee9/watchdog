import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Node from '../components/Node';
import { nodes } from '../api/nodeData';
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

class ClusterContainer extends Component {
    constructor(){
        super();
        this.nodes = [];
        this.handleSelectNode = this.handleSelectNode.bind(this);
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

    handleSelectNode(nodeName){
        browserHistory.push('/'+this.props.params.clusterName+'/'+nodeName);
    }


    render() {
        return (
            <div style={styles.container}>
                <Breadcrumb>
                    <Link to='/'>Home </Link>
                    <span>Cluster</span>
                </Breadcrumb>
                { this.nodes.map(node => 
                    <Node name={node.name} onClick={this.handleSelectNode} />
                ) }
            </div>
        )
    }
}

export default ClusterContainer