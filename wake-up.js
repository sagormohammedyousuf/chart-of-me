

// Data definitions
const weekDayNameLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const labelsDate = ['06.05', '07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05', '18.05', '19.05', '20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'];
const wakeUpTime = [4.4, 4.4, 5.10, 4.4, 5.00, 5.20, 4.40, 4.40, 4.35, 4.35, 4.35, 4.35, 4.35, 5.10, 4.40, 4.35, 4.35, 4.40, 5.00, 4.35, 4.35];
let wakeDisplay = false;

// Function to update the chart options and re-render the chart
function updateCharts() {
  charts.forEach(chart => {
    chart.options.scales.x2.display = wakeDisplay; // Toggle the display property for x2 scale
    chart.update();
  });
}


// Function to toggle dataset visibility
function toggleDatasetVisibility(chart, datasetIndex) {
  let meta = chart.getDatasetMeta(datasetIndex);
  meta.hidden = meta.hidden === null ? !chart.data.datasets[datasetIndex].hidden : null;
  chart.update();
}

// Chart definitions
const chartConfigs = [
  {
    elementId: 'wake-up-0',
    config: {
      type: 'line',
      data: {
        labels: labelsDate,
        datasets: [{
          label: 'wake-up',
          data: wakeUpTime,
          borderWidth: 4,
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        }]
      },
      options: {
        scales: {
          x2: {
            display: wakeDisplay,
            labels: weekDayNameLabels
          },
          x: {
            display: true,
            labels: labelsDate
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
    elementId: 'wake-up-1',
    config: {
      type: 'line',
      data: {
        labels: labelsDate,
        datasets: [{
          label: 'wake-up',
          data: wakeUpTime,
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
            text: 'wake-up-time'
          }
        },
        scales: {
          x2: {
            display: wakeDisplay,
            labels: weekDayNameLabels
          },
          x: {
            display: true,
            labels: labelsDate
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
    elementId: 'wake-up-2',
    config: {
      type: 'line',
      data: {
        labels: labelsDate,
        datasets: [{
          label: 'wake-up',
          data: wakeUpTime,
          borderWidth: 4,
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        }]
      },
      options: {
        scales: {
          x2: {
            display: wakeDisplay,
            labels: weekDayNameLabels
          },
          x: {
            display: true,
            labels: labelsDate
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
    elementId: 'wake-up-3',
    config: {
      type: 'line',
      data: {
        labels: labelsDate,
        datasets: [{
          label: 'wake-up',
          data: wakeUpTime,
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
            display: wakeDisplay,
            labels: weekDayNameLabels
          },
          x: {
            display: true,
            labels: labelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'wake-up-4',
    config: {
      type: 'line',
      data: {
        labels: labelsDate,
        datasets: [{
          label: 'wake-up',
          data: wakeUpTime,
          borderColor: 'rgb(75, 192, 192)',
          segment: {
            borderColor: function(ctxSleep) {
              return ctxSleep.p0.skip || ctxSleep.p1.skip ? 'rgb(0, 0, 0, 0.2)' : ctxSleep.p0.parsed.y > ctxSleep.p1.parsed.y ? 'rgb(192, 75, 75)' : undefined;
            },
            borderDash: function(ctxSleep) {
              return ctxSleep.p0.skip || ctxSleep.p1.skip ? [6, 6] : undefined;
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
            display: wakeDisplay,
            labels: weekDayNameLabels
          },
          x: {
            display: true,
            labels: labelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'wake-up-5',
    config: {
      type: 'line',
      data: {
        labels: labelsDate,
        datasets: [{
          label: 'wake-up',
          data: wakeUpTime,
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
            display: wakeDisplay,
            labels: weekDayNameLabels
          },
          x: {
            display: true,
            labels: labelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'wake-up-6',
    config: {
      type: 'line',
      data: {
        labels: labelsDate,
        datasets: [{
          label: 'wake-up',
          backgroundColor: '#6c63ff',
          borderColor: '#1E0342',
          data: wakeUpTime,
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        scales: {
         x2: {
            display: wakeDisplay,
            labels: weekDayNameLabels
          },
          x: {
            display: true,
            labels: labelsDate
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
const charts = chartConfigs.map(config => new Chart(document.getElementById(config.elementId).getContext('2d'), config.config));

// Event listener to toggle wakeDisplay when Ctrl + , is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key  === '.') {
    wakeDisplay = !wakeDisplay;
    updateCharts();
  }
});

// Event listener to toggle dataset visibility when Ctrl + . is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === ',') {
    charts.forEach(chart => toggleDatasetVisibility(chart, 0));
  }
});