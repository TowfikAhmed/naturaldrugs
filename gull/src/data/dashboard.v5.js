export const dashboardOne = {
    series: [{
        name: "Desktops",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12],
    }],
    chartOptions: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
            show: false,
          },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 4,
        curve: 'smooth'
      },
     
      grid: {
        show: true,
        strokeDashArray: 3,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
        ],
        labels: {
          style: {
            colors: '#8e8da2',
            fontSize: '12px',
            fontFamily: 'Roboto',
          },
        },
        tooltip: {
          enabled: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      colors: ['#8b5cf6'],
      tooltip: {
        enabled: true,
        theme: "dark",
        
      },
      markers: {
        size: 4,
        colors: '#8b5cf6',
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
    },
}

export const dashboardTwo = {
    series: [{
        name: 'Series 1',
        data: [10, 80, 15, 71, 18, 80, 100],
      },
      {
        name: 'Series 2',
        data: [80, 12, 75, 45, 84, 15, 74],
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false,
          },
        },
        legend: {
            show: false,
            position: 'bottom',
            offsetX: '20px',
        },
        colors: ['#C4B5FD', '#DDD6FE'],
        dataLabels: {
          enabled: false
        },
        stroke: {
            width: 0,
            curve: 'smooth',
        },
        markers: {
            size: [4, 4],
        },
        grid: {
            show: true,
            strokeDashArray: 3,
        },
        fill: {
            opacity: 1,
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          theme: "dark",
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
}

export const dashboardThree = {
    
    series: [
        {
            name: 'Like',
            data: [120, 90, 130, 140, 49, 62, 100, 91, 148],
        },
        {
            name: 'Avg Likes per day',
            data: [120, 120, 110, 110, 35, 90, 130, 80, 100],
        },
      ],
    chartOptions: {
    colors: ['#F14004', '#8e8da2'],
    stroke: {
        width: [4, 3],
        curve: 'straight',
        },
        markers: {
        size: [6, 0],
        },
        legend: {
        show: false,
        position: 'bottom',
        offsetX: '20px',
        },
        chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        },
        dataLabels: {
        enabled: false,
        },
        grid: {
        strokeDashArray: 3,
        },
        xaxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
      },
      
      tooltip: {
        enabled: true,
        theme: "dark",
        
      },
    },
      
      

}

export const dashboardFour = {
    series: [
        {
          name: 'Comments',
          data: [120, 90, 130, 140, 49, 62, 100, 91, 148],
        },
        {
          name: 'Avg Comments per day',
          data: [120, 120, 110, 110, 35, 90, 130, 80, 100],
        },
      ],
    chartOptions: {
        colors: ['#28C76E', '#8e8da2'],
        legend: {
            show: false,
            position: 'bottom',
            offsetX: '20px',
          },
          stroke: {
            width: [4, 3],
            curve: 'straight',
          },
          markers: {
            size: [6, 0],
          },
          chart: {
            height: 350,
            type: 'line',
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            strokeDashArray: 3,
          },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
            ],
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          tooltip: {
            enabled: true,
            theme: "dark",
            
          },
    
    },
}
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
export const dashboardFive = {
    series: [
        {
          name: 'Mon',
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Tue',
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Wed',
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Thu',
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Fri',
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Sat',
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Sun',
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chartOptions: {
        tooltip: {
          enabled: true,
          theme: "dark",
          
        },
        chart: {
            height: 350,
            type: 'heatmap',
            toolbar: {
              show: false,
            },
          },
          grid: {
            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          plotOptions: {
            heatmap: {
              radius: 10,
            },
          },
          dataLabels: {
            enabled: false,
          },
          colors: ['#A78BFA'],
          xaxis: {
            categories: [
              '12am',
              '1am',
              '3am',
              '4am',
              '5am',
              '6am',
              '7am',
              '8am',
              '9am',
              '10am',
              '11am',
              '12pm',
              '1pm',
              '2pm',
              '3pm',
              '4pm',
              '5pm',
              '6pm',
              '7pm',
              '8pm',
              '9pm',
              '10pm',
              '11pm',
            ],
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
      },
      
      
}