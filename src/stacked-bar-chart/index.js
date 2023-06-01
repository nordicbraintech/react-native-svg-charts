import React from 'react'
import StackedBarChart from './stacked-bar-chart'
import StackedBarChartGrouped from './stacked-bar-grouped'

const StackedBarChartGate = (props) => {
    const { data } = props

    if (data[0] && 'data' in data[0]) {
        return <StackedBarChartGrouped {...props} />
    }

    return <StackedBarChart {...props} />
}

export default StackedBarChartGate
