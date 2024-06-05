// Data definitions


// import { dateSet , weekName} from './global.js';
// const workLabelsDate = dateSet;
// const workWeekDayNameLabels = weekName;
const workWeekDayNameLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const workLabelsDate = ['06.05', '07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05', '18.05', '19.05', '20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'];
const workRateData = [6, 7, 6, 6, NaN, 8, 5, 8, 5, 7, 7, 5, 7, 5, 7, 6, 5, 4, NaN, 2, 5];
let workDisplay = false; 

// Function to update the chart options and re-render the chart
function updateWorkCharts() {
  chartsWork.forEach(chart => {
    chart.options.scales.x2.display = workDisplay; // Toggle the display property for x2 scale
    chart.update();
  });
}

// Function to toggle dataset visibility
function toggleWorkDatasetVisibility(chart, datasetIndex) {
  let meta = chart.getDatasetMeta(datasetIndex);
  meta.hidden = meta.hidden === null ? !chart.data.datasets[datasetIndex].hidden : null;
  chart.update();
}

// Chart definitions
const chartWorkConfigs = [
  {
    elementId: 'work-rate-0',
    config: {
        type: 'line',
        data: {
          labels: workLabelsDate,
          datasets: [{
            label: 'work-rate',
            data: workRateData,
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
              display: exDisplay,
              labels: workWeekDayNameLabels
            },
            x: {
              display: true,
              labels: workLabelsDate
            },
            y: {
              beginAtZero: true
            }
          }
        }
      }
  },
  {
    elementId: 'work-rate-1',
    config: {
      type: 'line',
      data: {
        labels: workLabelsDate,
        datasets: [{
          label: 'work-rate',
          data: workRateData,
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
            text: 'work-rate'
          }
        },
        scales: {
          x2: {
            display: workDisplay,
            labels: workWeekDayNameLabels
          },
          x: {
            display: true,
            labels: workLabelsDate
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
    elementId: 'work-rate-2',
    config: {
      type: 'line',
      data: {
        labels: workLabelsDate,
        datasets: [{
          label: 'work-rate',
          data: workRateData,
          borderWidth: 4,
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        }]
      },
      options: {
        scales: {
          x2: {
            display: workDisplay,
            labels: workWeekDayNameLabels
          },
          x: {
            display: true,
            labels: workLabelsDate
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
    elementId: 'work-rate-3',
    config: {
      type: 'line',
      data: {
        labels: workLabelsDate,
        datasets: [{
          label: 'work-rate',
          data: workRateData,
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
            display: workDisplay,
            labels: workWeekDayNameLabels
          },
          x: {
            display: true,
            labels: workLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'work-rate-4',
    config: {
      type: 'line',
      data: {
        labels: workLabelsDate,
        datasets: [{
          label: 'work-rate',
          data: workRateData,
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
            display: exDisplay,
            labels: workWeekDayNameLabels
          },
          x: {
            display: true,
            labels: workLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'work-rate-5',
    config: {
      type: 'line',
      data: {
        labels: workLabelsDate,
        datasets: [{
          label: 'work-rate',
          data: workRateData,
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
            display: workDisplay,
            labels: workWeekDayNameLabels
          },
          x: {
            display: true,
            labels: workLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'work-rate-6',
    config: {
      type: 'line',
      data: {
        labels: workLabelsDate,
        datasets: [{
          label: 'work-rate',
          backgroundColor: '#6c63ff',
          borderColor: '#1E0342',
          data: workRateData,
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        scales: {
          x2: {
            display: workDisplay,
            labels: workWeekDayNameLabels
          },
          x: {
            display: true,
            labels: workLabelsDate
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
const chartsWork = chartWorkConfigs.map(config => new Chart(document.getElementById(config.elementId).getContext('2d'), config.config));

// Event listener to toggle exDisplay when Ctrl + , is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === '.') {
    workDisplay = !workDisplay;
    updateWorkCharts();
  }
});

// Event listener to toggle dataset visibility when Ctrl + . is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === ',') {
    chartsWork.forEach(chart => toggleWorkDatasetVisibility(chart, 0));
  }
});