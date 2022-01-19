import React, { useEffect, RefObject } from 'react'
import basicLineChart from './BasicLineChart.module.scss'

const BasicLineChart = (props: BasicLineChartProps) => {

    useEffect( () => {
        draw()
    })
 
    const draw = () => {
    }

    return <div className="basicLineChart" />
}

interface BasicLineChartProps {
    // TODO
}

export default BasicLineChart
