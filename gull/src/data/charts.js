export const gradientRadial = {
    chart: {
        height: 250,
        type: 'radialBar',
        toolbar: {
          show: true,
        },
    },
    series: [75],
    chartOptions: {
        plotOptions: {
            radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
                },
            },
            track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
                },
            },
        
            dataLabels: {
                showOn: 'always',
                name: {
                offsetY: 1,
                show: true,
                color: '#888',
                fontSize: '15px',
                },
                value: {
                formatter: function (val) {
                    return parseInt(val);
                },
                color: '#111',
                fontSize: '12px',
                show: true,
                },
            },
            },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      
      stroke: {
        lineCap: 'round',
      },
      labels: ['Choice'],
      
    }
      
}

export const gradientRadialTwo = {
    chart: {
        height: 250,
        type: 'radialBar',
        toolbar: {
            show: true,
        },
    },
    series: [55],
    chartOptions: {
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24,
                },
                },
                track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35,
                },
                },
    
                dataLabels: {
                showOn: 'always',
                name: {
                    offsetY: 1,
                    show: true,
                    color: '#888',
                    fontSize: '15px',
                },
                value: {
                    formatter: function (val) {
                    return parseInt(val);
                    },
                    color: '#111',
                    fontSize: '12px',
                    show: true,
                },
                },
            },
            },
            fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#e6af4b'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
            },
            
            stroke: {
            lineCap: 'round',
            },
            labels: ['Pending'],
    }
}

export const gradientRadialThree = {
    chart: {
        height: 250,
        type: 'radialBar',
        toolbar: {
          show: true,
        },
      },
      series: [12],
    chartOptions: {
        plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24,
                },
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35,
                },
              },
        
              dataLabels: {
                showOn: 'always',
                name: {
                  offsetY: 1,
                  show: true,
                  color: '#888',
                  fontSize: '15px',
                },
                value: {
                  formatter: function (val) {
                    return parseInt(val);
                  },
                  color: '#111',
                  fontSize: '12px',
                  show: true,
                },
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#e05038'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
         
          stroke: {
            lineCap: 'round',
          },
          labels: ['Profit'],
    }
}

export const gradientRadialFour = {
    chart: {
        height: 250,
        type: 'radialBar',
        toolbar: {
          show: true,
        },
      },
      series: [100],
      chartOptions: {
        plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24,
                },
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35,
                },
              },
        
              dataLabels: {
                showOn: 'always',
                name: {
                  offsetY: 1,
                  show: true,
                  color: '#888',
                  fontSize: '15px',
                },
                value: {
                  formatter: function (val) {
                    return parseInt(val);
                  },
                  color: '#111',
                  fontSize: '12px',
                  show: true,
                },
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#c0dfd9'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          
          stroke: {
            lineCap: 'round',
          },
          labels: ['Revenue'],
      }
}

export const basiAreaChart = {
    series: [
        {
          name: 'Orders',
          data: [10, 20, 28, 51, 15, 40, 20],
        },
      ],
     
    chartOptions: {
        colors: ['#e62739'],
        dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
            width: 1,
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
        tooltip: {
          enabled: true,
          theme: "dark",
          
        }, 
    }
}

export const basiAreaChartTwo = {
    series: [
        {
          name: 'Marketing',
          data: [50, 20, 0, 51, 15, 30, 70],
        },
      ],
      chartOptions: {
        colors: ['#ffeb3b'],
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
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
            width: 1,
          },
          tooltip: {
            enabled: true,
            theme: "dark",
            
          },
    }
      
}

export const basiAreaChartThree = {
    series: [
        {
          name: 'Earning',
          data: [100, 20, 20, 51, 35, 10, 70],
        },
      ],
     
    
   chartOptions: {
    colors: ['#4caf50'],
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
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 1,
      },
      tooltip: {
        enabled: true,
        theme: "dark",
      },
   }
      
}