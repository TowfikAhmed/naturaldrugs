import {
  randomizeArray,
  sparklineData

} from "@/data/apexDataSeries";

export const dashboardOne = {
    series: [{
        name: 'income 1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'income 2',
        data: [11, 32, 45, 32, 34, 52, 41],
      }],
      chartOptions: {
        colors: ['#EDE9FE', '#DDD6FE'],
        chart: {
          height: 100,
          type: 'area',
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
          
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
          },
          tooltip: {
            enabled: true,
            theme: "dark",
            
          },
      },
      
      
    
}

export const dashboardTwo = {
    series: [{
        name: 'approve 1',
        data: [90, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'approve 2',
        data: [11, 90, 45, 32, 34, 52, 41],
      }],
      chartOptions: {
        colors: ['#EDE9FE', '#C4B5FD'],
        tooltip: {
          enabled: true,
          theme: "dark",
          
        },
        chart: {
          height: 100,
          type: 'area',
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
          
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 1,
          },
       
      },
      
      
    
}
export const dashboardThree = {
    series: [{
        name: 'transaction 1',
        data: [11, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'transaction 2',
        data: [100, 40, 45, 32, 34, 0, 41],
      }],
      chartOptions: {
        colors: ['#EDE9FE', '#C4B5FD'],
        tooltip: {
          enabled: true,
          theme: "dark",
          
        },
        chart: {
          height: 100,
          type: 'area',
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
          
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 1,
          },
       
      },
      
      
    
}
export const dashboardFour = {
    series: [{
        name: 'sales 1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'sales 2',
        data: [11, 32, 90, 32, 34, 52, 41],
      }],
      chartOptions: {
        colors: ['#EDE9FE', '#C4B5FD'],
        tooltip: {
          enabled: true,
          theme: "dark",
          
        },
        chart: {
          height: 100,
          type: 'area',
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
          
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
          },
       
      },
      
      
    
}

export const spark3 = {
  series: [
    {
      name: "series2",
      data: [
        47,
        45,
        54,
        38,
        56,
        24,
        65,
        31,
        37,
        39,
        62,
        51,
        35,
        41,
        35,
        27,
        93,
        53,
        61,
        27,
        54,
        43,
        19,
        46,
      ],
    },
  ],

  chartOptions: {
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "straight",
      width: 1,
    },
    fill: {
      opacity: 0.3,
    },
    series: [
      {
        data: randomizeArray(sparklineData),
      },
    ],
    yaxis: {
      min: 0,
    },
    colors: ["#A855F7"],
    tooltip: {
      enabled: true,
      theme: "dark",
      
    },
  },
}


export const dashboardFive = {
  series: [42, 47, 52, 58, 65],
          chartOptions: {
            chart: {
              width: '100%',
              type: 'polarArea'
            },
            labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
            fill: {
              opacity: 1
            },
            stroke: {
              width: 1,
              colors: undefined
            },
            yaxis: {
              show: false
            },
            legend: {
              show: false
            },
            plotOptions: {
              polarArea: {
                rings: {
                  strokeWidth: 0
                },
                spokes: {
                  strokeWidth: 0
                },
              }
            },
            theme: {
              monochrome: {
                enabled: true,
                color: '#8b5cf6',
                shadeTo: 'light',
                shadeIntensity: 0.6
              }
            }
          },
        
}