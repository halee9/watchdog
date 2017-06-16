import React from 'react';

const Metric = ({changeMetric}) => (
    <div>
        <span>Metric: </span>
        <select onChange={changeMetric}>
            <option value='cores'>cores</option>
            <option value='pods'>pods</option>
            <option value='RAM'>RAM</option>
        </select>
    </div>
)

export default Metric;
