 // Load Chart.js library dynamically
 const script = document.createElement('script');
 script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
 script.onload = () => { 

// Data definitions
const healthWeekDayNameLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const healthLabelsDate = ['06.05', '07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05', '18.05', '19.05', '20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'];
const healthRate = [5, 6, 8, 4, 8,2,6,5,6,4,6,6,5,6,6,5,4,6,2,6];
let healthDisplay = false; 

// Function to update the chart options and re-render the chart
function updateHealthCharts() {
  chartsHealth.forEach(chart => {
    chart.options.scales.x2.display = healthDisplay; 
    chart.update();
  });
}

// Function to toggle dataset visibility
function toggleHealthDatasetVisibility(chart, datasetIndex) {
  let meta = chart.getDatasetMeta(datasetIndex);
  meta.hidden = meta.hidden === null ? !chart.data.datasets[datasetIndex].hidden : null;
  chart.update();
}

// Chart definitions
const chartHealthConfigs = [
  {
    elementId: 'health-rate-0',
    config: {
      type: 'line',
      data: {
        labels: healthLabelsDate,
        datasets: [{
          label: 'health-rate',
          data: healthRate,
          borderWidth: 4,
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'],
          stepped: true,
          borderColor: '#169788',
        }]
      },
      options: {
        responsive: true,
        interaction: {
          intersect: false,
          axis: 'x'
        },
        plugins: {
          title: {
            display: false,
          }
        },
        scales: {
          x2: {
            display: healthDisplay,
            labels: healthWeekDayNameLabels
          },
          x: {
            display: true,
            labels: healthLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'health-rate-1',
    config: {
      type: 'line',
      data: {
        labels: healthLabelsDate,
        datasets: [{
          label: 'health-rate',
          data: healthRate,
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          yAxisID: 'y',
        }]
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: false,
            text: 'health rate 1'
          }
        },
        scales: {
          x2: {
            display: healthDisplay,
            labels: healthWeekDayNameLabels
          },
          x: {
            display: true,
            labels: healthLabelsDate
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
          },
        }
      }
    }
  },
  {
    elementId: 'health-rate-2',
    config: {
      type: 'line',
      data: {
        labels: healthLabelsDate,
        datasets: [{
          label: 'health-rate',
          data: healthRate,
          borderWidth: 4,
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        }]
      },
      options: {
        scales: {
          x2: {
            display: healthDisplay,
            labels: healthWeekDayNameLabels
          },
          x: {
            display: true,
            labels: healthLabelsDate
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              fontColor: 'rgb(255, 99, 132)'
            }
          }
        }
      }
    }
  },
  {
    elementId: 'health-rate-3',
    config: {
      type: 'line',
      data: {
        labels: healthLabelsDate,
        datasets: [{
          label: 'health-rate',
          data: healthRate,
          borderWidth: 4,
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 15
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
          }
        },
        scales: {
          x2: {
            display: healthDisplay,
            labels: healthWeekDayNameLabels
          },
          x: {
            display: true,
            labels: healthLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'health-rate-4',
    config: {
      type: 'line',
      data: {
        labels: healthLabelsDate,
        datasets: [{
          label: 'health-rate',
          data: healthRate,
          borderColor: 'rgb(75, 192, 192)',
          segment: {
            borderColor: function(ctx) {
              return ctx.p0.skip || ctx.p1.skip ? 'rgb(0, 0, 0, 0.2)' : ctx.p0.parsed.y > ctx.p1.parsed.y ? 'rgb(192, 75, 75)' : undefined;
            },
            borderDash: function(ctx) {
              return ctx.p0.skip || ctx.p1.skip ? [6, 6] : undefined;
            },
          },
          spanGaps: true
        }]
      },
      options: {
        fill: false,
        interaction: {
          intersect: false
        },
        radius: 0,
        scales: {
          x2: {
            display: healthDisplay,
            labels: healthWeekDayNameLabels
          },
          x: {
            display: true,
            labels: healthLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'health-rate-5',
    config: {
      type: 'line',
      data: {
        labels: healthLabelsDate,
        datasets: [{
          label: 'health-rate',
          data: healthRate,
          borderWidth: 4,
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'],
          stepped: true,
          borderColor: '#169788',
        }]
      },
      options: {
        responsive: true,
        interaction: {
          intersect: false,
          axis: 'x'
        },
        plugins: {
          title: {
            display: false,
          }
        },
        scales: {
          x2: {
            display: healthDisplay,
            labels: healthWeekDayNameLabels
          },
          x: {
            display: true,
            labels: healthLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'health-rate-6',
    config: {
      type: 'line',
      data: {
        labels: healthLabelsDate,
        datasets: [{
          label: 'health-rate',
          backgroundColor: '#8B93FF',
          borderColor: '#1E0342',
          data: healthRate,
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        scales: {
          x2: {
            display: healthDisplay,
            labels: healthWeekDayNameLabels
          },
          x: {
            display: true,
            labels: healthLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  }
];

// Initialize all charts
const chartsHealth = chartHealthConfigs.map(config => new Chart(document.getElementById(config.elementId).getContext('2d'), config.config));

// Event listener to toggle exDisplay when Ctrl + , is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === '.') {
    healthDisplay = !healthDisplay;
    updateHealthCharts();
  }
});

// Event listener to toggle dataset visibility when Ctrl + . is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === ',') {
    chartsHealth.forEach(chart => toggleHealthDatasetVisibility(chart, 0));
  }
});

              
       



 };
 

document.head.appendChild(script);