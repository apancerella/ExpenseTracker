/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/**
 * DCSO chart that displays current metrics of a plan as a graph.
 * @author Anthony P. Pancerella
 * @version August 27, 2018
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { getProjectionChartData } from '../../services/selectors';

const ReactHighcharts = require('react-highcharts');
const HighchartsMore = require('highcharts-more');

HighchartsMore(ReactHighcharts.Highcharts);

const HighchartsExporting = require('highcharts-exporting');

HighchartsExporting(ReactHighcharts.Highcharts);


const ProjectionChart = () => {
    const chartData = useSelector((state) => getProjectionChartData(state));
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date();
    const currMonth = date.getMonth();
    const options = {
        chart: {
            type: 'line',
            height: '200',
            align: 'center'
        },
        title: {
            text: 'Monthly Income/Expense Totals'
        },
        xAxis: {
            categories: [monthArray[currMonth], monthArray[currMonth + 1], monthArray[currMonth + 2], monthArray[currMonth + 3], monthArray[currMonth + 4]]
        },
        yAxis: {
            title: null,
            reversedStacks: false
        },
        exporting: {
            enabled: true,
            sourceHeight: '500',
            sourceWidth: '1000'
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
        series: chartData,
        colors: ['#617487', '#1B502B']
    };

    return (
        <>
            <div>
                <ReactHighcharts config={options} />
                <br />
            </div>
        </>
    );
};

export default ProjectionChart;
