import React from 'react';

const styles = {
  container: {
    width: '120px',
    height: '50px',
    border: '1px solid #aaa',
    borderRadius: '10px',
    backgroundColor: '#eee',
    textAlign: 'center',
    lineHeight: '150%',
  },
};

const showMetricData = (cores, pods, RAM, metric) => {
    if (metric === 'cores'){
        return <div>{cores}</div>;
    }
    else if (metric === 'pods'){
        return <div>{pods}</div>;
    }
    else if (metric === 'RAM'){
        return <div>{RAM}</div>;
    };
}

const RCContainer = ({ name, cores, pods, RAM, metric, onClick }) => (
    <div style={styles.container} onClick={() => onClick(name)}>
        <div>{name}</div>
        { showMetricData(cores, pods, RAM, metric)}
    </div>
)

// RCContainer.propTypes = {
//   name: PropTypes.string,
//   cores: PropTypes.number,
// };


export default RCContainer;
