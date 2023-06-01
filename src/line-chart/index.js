import React from 'react'
import LineChart from './line-chart'
import LineChartGrouped from './line-chart-grouped'

const LineChartGate = (props) => {
    const { data } = props

    if (data[0] && 'data' in data[0]) {
        return <LineChartGrouped {...props} />
    }

    return <LineChart {...props} />
}

export default LineChartGate
