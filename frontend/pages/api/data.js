
  //start feb22
  let ethperf = [12.31, -16.91, -28.80,-44.95,57.15,-7.43,-14.56,18.37,-17.70,-7.63,+32.58]
  let dataeth = []
  dataeth[0] = 100 
  ethperf.forEach((e, index) => {
    dataeth[index+1] = parseInt((dataeth[index]*(1+e/100)).toFixed(0))
  })

  
  let botperf = [59.3, -17.8, -6.8,-20.1,10.4,5.9,24.4,-7.1,7.5,4.2,7.0]
  let databot = []
  databot[0]=100
  botperf.forEach((e, index) => {
    databot[index+1] = parseInt((databot[index]*(1+e/100)).toFixed(0))
  })
  export const lineChartData = [
    {
      name: "PLP Decentralized Trading Bot",
      data: databot,
    },
    {
      name: "Ethereum",
      data: dataeth,
    },
  ];
  
  export const lineChartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "date",
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
      ],
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      strokeDashArray: 5,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [],
      },
      colors: ["#9face6", "#ecf0f1"],
    },
    colors: ["#9face6", "#3c3c3d"],
  };
  