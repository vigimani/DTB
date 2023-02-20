
import React from "react";
import dynamic from 'next/dynamic'

import { lineChartData, lineChartOptions } from "../../pages/api/data";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class Graph extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: lineChartData,
      chartOptions: lineChartOptions,
    });
  }

  render() {
    return (
      <>
            <ReactApexChart
              options={this.state.chartOptions}
              series={this.state.chartData}
              type="area"
              width="100%"
              height="100%"
            />
      </>
    );
  }
}

export default Graph;
