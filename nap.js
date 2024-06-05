// const napDayLabel = ['06.05', '07.05', '08.05', '09.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05', '18.05', '19.05', '20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'];
// const napData = [80, 70, 60, 30, 40, 180, 6, 90, 60, 80, 60, 90, 60, 3, 65, 65, 90, 240, 120 + 240, 30 + 60];




// const nap0 = document.getElementById('power-nap-0');

// new Chart(nap0, {
//     type: 'line',
//     data: {
//         labels: napDayLabel ,
//         datasets: [{
//             label: 'Sleep time',
//             data: napData,
//             borderWidth: 4,
//             backgroundColor: ['red', "blue", "yellow", "green", "purple", "orange"],
//             pointStyle: 'circle',
//             pointRadius: 10,
//             pointHoverRadius: 15
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             title: {
//                 display: true,
//                 // text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
//             }
//         },
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });



// // // nap 1


// const dataNap1 = {
//     labels: napDayLabel,
//     datasets: [
//         {
//             label: 'Exercise Rate',
//             data: napData,
//             borderColor: 'red',
//             backgroundColor: 'rgba(255, 0, 0, 0.5)',
//             yAxisID: 'y',
//         }
//     ]
// };

// const configNap1 = {
//     type: 'line',
//     data: dataNap1,
//     options: {
//         responsive: true,
//         interaction: {
//             mode: 'index',
//             intersect: false,
//         },
//         stacked: false,
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Exercise Time'
//             }
//         },
//         scales: {
//             y: {
//                 type: 'linear',
//                 display: true,
//                 position: 'left',
//             },
//             y1: {
//                 type: 'linear',
//                 display: true,
//                 position: 'right',
//                 grid: {
//                     drawOnChartArea: false,
//                 },
//             },
//         }
//     },
// };

// const ctxNap1 = document.getElementById('power-nap-1').getContext('2d');
// new Chart(ctxNap1, configNap1);





// const ctxPowerNapTwo = document.getElementById('power-nap-2');

// // Create the initial chart
// var myChart = new Chart(ctxPowerNapTwo, {
//   type: 'line',
//   data: {
//     labels: napDayLabel,
//     datasets: [{
//       label: 'work rate 2',
//       data: napData,
//       borderWidth: 4,
//       backgroundColor: ['red', "blue", "yellow", "green", "purple", "orange"],
//     }]
//   },
//   options: {
    
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     },

//     legend: {
//       display: false,
//       labels: {
//           fontColor: 'rgb(255, 99, 132)'
//       }
//   }
    
//   }
// });



// // nap 3 



// const napThree = document.getElementById('power-nap-3');

// new Chart(napThree, {
//     type: 'line',
//     data: {
//         labels: napDayLabel,
//         datasets: [{
//             label: 'wake-up',
//             data: napData,
//             borderWidth: 4,
//             backgroundColor: ['red', "blue", "yellow", "green", "purple", "orange"],
//             pointStyle: 'circle',
//             pointRadius: 10,
//             pointHoverRadius: 15
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             title: {
//                 display: true,
//                 // text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
//             }
//         },
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// // nap 4 /

// const configNapFour = {
//     type: 'line',
//     data: {
//         labels: napDayLabel,
//         datasets: [{
//             label: 'work-four',
//             data: napData,
//             borderColor: 'rgb(75, 192, 192)',
//             segment: {
//                 borderColor: function(ctxSleep) {
//                     return ctxSleep.p0.skip || ctxSleep.p1.skip ? 'rgb(0, 0, 0, 0.2)' : ctxSleep.p0.parsed.y > ctxSleep.p1.parsed.y ? 'rgb(192, 75, 75)' : undefined;
//                 },
//                 borderDash: function(ctxSleep) {
//                     return ctxSleep.p0.skip || ctxSleep.p1.skip ? [6, 6] : undefined;
//                 },
//             },
//             spanGaps: true
//         }]
//     },
//     options: {
//         fill: false,
//         interaction: {
//             intersect: false
//         },
//         radius: 0,
//     }
// };


// const ctxNapFour = document.getElementById('power-nap-4').getContext('2d');
// new Chart(ctxNapFour, configNapFour);



// // nap 5//



// const dataNapFive = {
//     labels:  napDayLabel,
//     datasets: [
//       {
//         label: 'work rate 5',
//         data: napData,
//         borderWidth: 4,
//         backgroundColor: ['red', "blue", "yellow","green", "purple"],
//         stepped: true,
//         borderColor: "#169788",
//         // Initial step interpolation
//       }
//     ]
//   };

//   const configNapFive = {
//     type: 'line',
//     data: dataNapFive,
//     options: {
//       responsive: true,
//       interaction: {
//         intersect: false,
//         axis: 'x'
//       },
//       plugins: {
//         title: {
//           display: true,
//           // text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
//         }
//       },
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   };

//   const ctxsNapFive = document.getElementById('power-nap-5').getContext('2d');
//   new Chart(ctxsNapFive, configNapFive);



// // nap six



// const ctxNapSix = document.getElementById("power-nap-6");
// new Chart(ctxNapSix, {
// type: 'line',
// data: {
// labels: napDayLabel,
// datasets: [
//    {
//        label: 'work rate 6',
//        backgroundColor: '#8B93FF', 
//        borderColor: '#1E0342',
//        data: napData,
//        borderWidth: 2,
//        fill: true ,
//        // display: false
//    }
// ]
// },
// options: {
// scales: {
//    y: {
//        beginAtZero: true
//    }
// }
// }
// }); 
 





// Data definitions
const napWeekDayNameLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const napLabelsDate = ['06.05', '07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05', '18.05', '19.05', '20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'];
const napTime = [80, 70, 60, 30, 40, 180, 6, 90, 60, 80, 60, 90, 60, 3, 65, 65, 90, 240, 120 + 240, 30 + 60];

let napDisplay = false; // Changed to lowercase to match usage

// Function to update the chart options and re-render the chart
function updateNapCharts() {
  chartsNap.forEach(chart => {
    chart.options.scales.x2.display = napDisplay; // Toggle the display property for x2 scale
    chart.update();
  });
}

// Function to toggle dataset visibility
function toggleNapDatasetVisibility(chart, datasetIndex) {
  let meta = chart.getDatasetMeta(datasetIndex);
  meta.hidden = meta.hidden === null ? !chart.data.datasets[datasetIndex].hidden : null;
  chart.update();
}

// Chart definitions
const chartNapConfigs = [
  {
    elementId: 'power-nap-0',
    config: {
        type: 'line',
        data: {
          labels: napLabelsDate,
          datasets: [{
            label: 'power-nap',
            data: napTime,
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
              display: napDisplay,
              labels: napWeekDayNameLabels
            },
            x: {
              display: true,
              labels: napLabelsDate
            },
            y: {
              beginAtZero: true
            }
          }
        }
      }
  },
  {
    elementId: 'power-nap-1',
    config: {
      type: 'line',
      data: {
        labels: napLabelsDate,
        datasets: [{
          label: 'power-nap',
          data: napTime,
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
            text: 'power-nap'
          }
        },
        scales: {
          x2: {
            display: napDisplay,
            labels: napWeekDayNameLabels
          },
          x: {
            display: true,
            labels: napLabelsDate
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
    elementId: 'power-nap-2',
    config: {
      type: 'line',
      data: {
        labels: napLabelsDate,
        datasets: [{
          label: 'power-nap',
          data: napTime,
          borderWidth: 4,
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        }]
      },
      options: {
        scales: {
          x2: {
            display: napDisplay,
            labels: napWeekDayNameLabels
          },
          x: {
            display: true,
            labels: napLabelsDate
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
    elementId: 'power-nap-3',
    config: {
      type: 'line',
      data: {
        labels: napLabelsDate,
        datasets: [{
          label: 'power-nap',
          data: napTime,
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
            display: napDisplay,
            labels: napWeekDayNameLabels
          },
          x: {
            display: true,
            labels: napLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'power-nap-4',
    config: {
      type: 'line',
      data: {
        labels: napLabelsDate,
        datasets: [{
          label: 'power-nap',
          data: napTime,
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
            display: napDisplay,
            labels: napWeekDayNameLabels
          },
          x: {
            display: true,
            labels: napLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'power-nap-5',
    config: {
      type: 'line',
      data: {
        labels: napLabelsDate,
        datasets: [{
          label: 'power-nap',
          data: napTime,
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
            display: napDisplay,
            labels: napWeekDayNameLabels
          },
          x: {
            display: true,
            labels: napLabelsDate
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  {
    elementId: 'power-nap-6',
    config: {
      type: 'line',
      data: {
        labels: napLabelsDate,
        datasets: [{
          label: 'power-nap',
          backgroundColor: '#6c63ff',
          borderColor: '#1E0342',
          data: napTime,
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        scales: {
          x2: {
            display: napDisplay,
            labels: napWeekDayNameLabels
          },
          x: {
            display: true,
            labels: napLabelsDate
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
const chartsNap = chartNapConfigs.map(config => new Chart(document.getElementById(config.elementId).getContext('2d'), config.config));

// Event listener to toggle exDisplay when Ctrl + , is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === '.') {
    napDisplay = !napDisplay;
    updateNapCharts();
  }
});

// Event listener to toggle dataset visibility when Ctrl + . is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === ',') {
    chartsNap.forEach(chart => toggleNapDatasetVisibility(chart, 0));
  }
});
