// Data definitions
const exWeekDayNameLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const exLabelsDate = ['06.05', '07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05', '18.05', '19.05', '20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'];
const exerciseTime = [60, 50, 40, 45, 60, 0, 30, 30, 60, 0, 0, 30, 40, 40, 50, 0, 0, 0, 20, 30];
let exDisplay = false; // Changed to lowercase to match usage

// Function to update the chart options and re-render the chart
function updateExCharts() {
  chartsEx.forEach(chart => {
    chart.options.scales.x2.display = exDisplay; // Toggle the display property for x2 scale
    chart.update();
  });
}

// Function to toggle dataset visibility
function toggleExDatasetVisibility(chart, datasetIndex) {
  let meta = chart.getDatasetMeta(datasetIndex);
  meta.hidden = meta.hidden === null ? !chart.data.datasets[datasetIndex].hidden : null;
  chart.update();
}

// Chart definitions
const chartExConfigs = [
  {
    elementId: 'exercise-0',
    config: {
      type: 'line',
      data: {
        labels: exLabelsDate,
        datasets: [{
          label: 'exercise',
          backgroundColor: '#8B93FF',
          borderColor: '#1E0342',
          data: exerciseTime,
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        scales: {
          x2: {
            display: exDisplay,
            labels: exWeekDayNameLabels
          },
          x: {
            display: true,
            labels: exLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'exercise-1',
    config: {
      type: 'line',
      data: {
        labels: exLabelsDate,
        datasets: [{
          label: 'exercise',
          data: exerciseTime,
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
            display:false,
            text: 'Exercise 1'
          }
        },
        scales: {
          x2: {
            display: exDisplay,
            labels: exWeekDayNameLabels
          },
          x: {
            display: true,
            labels: exLabelsDate
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
    elementId: 'exercise-2',
    config: {
      type: 'line',
      data: {
        labels: exLabelsDate,
        datasets: [{
          label: 'exercise',
          data: exerciseTime,
          borderWidth: 4,
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        }]
      },
      options: {
        scales: {
          x2: {
            display: exDisplay,
            labels: exWeekDayNameLabels
          },
          x: {
            display: true,
            labels: exLabelsDate
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
    elementId: 'exercise-3',
    config: {
      type: 'line',
      data: {
        labels: exLabelsDate,
        datasets: [{
          label: 'exercise',
          data: exerciseTime,
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
            display: exDisplay,
            labels: exWeekDayNameLabels
          },
          x: {
            display: true,
            labels: exLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'exercise-4',
    config: {
      type: 'line',
      data: {
        labels: exLabelsDate,
        datasets: [{
          label: 'exercise',
          data: exerciseTime,
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
            labels: exWeekDayNameLabels
          },
          x: {
            display: true,
            labels: exLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'exercise-5',
    config: {
      type: 'line',
      data: {
        labels: exLabelsDate,
        datasets: [{
          label: 'exercise',
          data: exerciseTime,
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
            display: exDisplay,
            labels: exWeekDayNameLabels
          },
          x: {
            display: true,
            labels: exLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'exercise-6',
    config: {
      type: 'line',
      data: {
        labels: exLabelsDate,
        datasets: [{
          label: 'exercise',
          backgroundColor: '#8B93FF',
          borderColor: '#1E0342',
          data: exerciseTime,
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        scales: {
          x2: {
            display: exDisplay,
            labels: exWeekDayNameLabels
          },
          x: {
            display: true,
            labels: exLabelsDate
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
const chartsEx = chartExConfigs.map(config => new Chart(document.getElementById(config.elementId).getContext('2d'), config.config));

// Event listener to toggle exDisplay when Ctrl + , is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === '.') {
    exDisplay = !exDisplay;
    updateExCharts();
  }
});

// Event listener to toggle dataset visibility when Ctrl + . is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === ',') {
    chartsEx.forEach(chart => toggleExDatasetVisibility(chart, 0));
  }
});
