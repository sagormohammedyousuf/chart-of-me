// const goBedTime = [8.50, 9.20, 9.20, 9.40, 10.40, 9.40,10.00,9.00 ,9.00,9.20,9.30,9.50,9.20,9.10,9.10,10.10,9.35,10.10,9.10,9.13]
// const labelsSleep = ['06.05', '07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05' , '15.05', '16.05', '17.05' , '18.05', '19.05','20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'];
// const dayNameLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// // var wakeDisplay = false;

// const data = {
//     labels: labelsSleep,
//     datasets: [
//         {
//             label: 'go bed',
//             data: goBedTime ,
//             borderColor: 'red',
//             backgroundColor: 'rgba(255, 0, 0, 0.5)',
//             yAxisID: 'y',
//         },
//         {
//             label: 'sleep',
//             data: [9.20, 9.40, 9.40, 10.00, 10.20,10.20,10.40,9.40,9.30,9.50,9.50,10.30,9.50,9.50,10.00,10.35,10.20,10.50,9.50,10.00],
//             borderColor: 'blue',
//             backgroundColor: 'rgba(0, 0, 255, 0.5)', 
//             yAxisID: 'y1',
//         }
//     ]
// };

// const config = {
//     type: 'line',
//     data: data,
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
//                 text: 'Sleep time'
//             }
//         },
//         scales: {
//             x2 : {
                
//                 labels : dayNameLabels
//             },
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

// const ctxSleep = document.getElementById('sleep-0').getContext('2d');
// new Chart(ctxSleep, config);




// // document.addEventListener('keydown', function(event) {
// //     if (event.ctrlKey && event.key === ',') {
// //       wakeDisplay = !wakeDisplay  // Toggle wakeDisplay
// //       updateChart(); 
// //     }
// //   });
  


// // sleep 1 //


// const dataReal1 = {
//     labels: labelsSleep,
//     datasets: [
//         {
//             label: 'go bed',
//             data: goBedTime ,
//             borderColor: 'red',
//             backgroundColor: 'rgba(255, 0, 0, 0.5)',
//             yAxisID: 'y',
//         },
//         {
//             label: 'sleep',
//             data: [9.20, 9.40, 9.40, 10.00, 10.20,10.20,10.40,9.40,9.30,9.50,9.50,10.30,9.50,9.50,10.00,10.35,10.20,10.50,9.50,10.00],
//             borderColor: 'blue',
//             backgroundColor: 'rgba(0, 0, 255, 0.5)', 
//             yAxisID: 'y1',
//         }
//     ]
// };

// const configReal1 = {
//     type: 'line',
//     data: dataReal1,
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
//                 text: 'Sleep time'
//             }
//         },
//         scales: {
//             x2 : {
                
//                 labels : dayNameLabels
//             },
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

// const ctxSleepReal1 = document.getElementById('sleep-1').getContext('2d');
// new Chart(ctxSleepReal1, configReal1);


// ///





// const ctxSleepOne = document.getElementById('sleep-2');

// // Create the initial chart
// var myChart = new Chart(ctxSleepOne, {
//   type: 'line',
//   data: {
//     labels: labelsSleep,
//     datasets: [{
//       label: 'sleep time',
//       data: goBedTime,
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


// // sleep 2 //


// const sleepTwo = document.getElementById('sleep-3');

// new Chart(sleepTwo, {
//     type: 'line',
//     data: {
//         labels:  labelsSleep,
//         datasets: [{
//             label: 'Sleep time',
//             data: goBedTime,
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



// // sleep 3 // 



//             const configSleep3 = {
//                 type: 'line',
//                 data: {
//                     labels:  labelsSleep,
//                     datasets: [{
//                         label: 'sleep',
//                         data: goBedTime,
//                         borderColor: 'rgb(75, 192, 192)',
//                         segment: {
//                             borderColor: function(ctxSleep) {
//                                 return ctxSleep.p0.skip || ctxSleep.p1.skip ? 'rgb(0, 0, 0, 0.2)' : ctxSleep.p0.parsed.y > ctxSleep.p1.parsed.y ? 'rgb(192, 75, 75)' : undefined;
//                             },
//                             borderDash: function(ctxSleep) {
//                                 return ctxSleep.p0.skip || ctxSleep.p1.skip ? [6, 6] : undefined;
//                             },
//                         },
//                         spanGaps: true
//                     }]
//                 },
//                 options: {
//                     fill: false,
//                     interaction: {
//                         intersect: false
//                     },
//                     radius: 0,
//                 }
//             };


//             const ctxSleep3 = document.getElementById('sleep-4').getContext('2d');
//             new Chart(ctxSleep3, configSleep3);


// // sleep 4// 


 
//     const datas = {
//       labels:  labelsSleep,
//       datasets: [
//         {
//           label: 'sleep time',
//           data: goBedTime,
//           borderWidth: 4,
//           backgroundColor: ['red', "blue", "yellow","green", "purple"],
//           stepped: true,
//           borderColor: "#169788",
//           // Initial step interpolation
//         }
//       ]
//     };
 
//     const configs = {
//       type: 'line',
//       data: datas,
//       options: {
//         responsive: true,
//         interaction: {
//           intersect: false,
//           axis: 'x'
//         },
//         plugins: {
//           title: {
//             display: true,
//             // text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
//           }
//         },
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     };
 
//     const ctxs = document.getElementById('sleep-5').getContext('2d');
//     new Chart(ctxs, configs);
  

// //   sleep 5 //


// const ctxs5 = document.getElementById("sleep-6");
// new Chart(ctxs5, {
//     type: 'line',
//     data: {
//         labels:  labelsSleep,
//         datasets: [
//             {
//                 label: 'Exercise min',
//                 backgroundColor: '#8B93FF', 
//                 borderColor: '#1E0342',
//                 data: goBedTime,
//                 borderWidth: 2,
//                 fill: true ,
//                 // display: false
//             }
//         ]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// }); 












const sleepTime = [9.20, 9.40, 9.40, 10.00, 10.20,10.20,10.40,9.40,9.30,9.50,9.50,10.30,9.50,9.50,10.00,10.35,10.20,10.50,9.50,10.00];
const goBedTime = [8.50, 9.20, 9.20, 9.40, 10.40, 9.40,10.00,9.00 ,9.00,9.20,9.30,9.50,9.20,9.10,9.10,10.10,9.35,10.10,9.10,9.13];

// Data definitions
const sleepWeekDayNameLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const sleepLabelsDate = ['06.05', '07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05', '18.05', '19.05', '20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'];
let sleepDisplay = false; // Changed to lowercase to match usage

// Function to update the chart options and re-render the chart
function updateSleepCharts() {
 chartsSleep.forEach(chart => {
   chart.options.scales.x2.display = sleepDisplay; // Toggle the display property for x2 scale
   chart.update();
 });
}

// Function to toggle dataset visibility
function toggleSleepDatasetVisibility(chart, datasetIndex) {
 let meta = chart.getDatasetMeta(datasetIndex);
 meta.hidden = meta.hidden === null ? !chart.data.datasets[datasetIndex].hidden : null;
 chart.update();
}

// Chart definitions
const chartSleepConfigs = [
 {
   elementId: 'sleep-0',
   config: {
       type: 'line',
       data: {
         labels: sleepLabelsDate,
         datasets: [{
           label: 'sleep',
           data: sleepTime,
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
             text: 'sleep 1'
           }
         },
         scales: {
           x2: {
             display: sleepDisplay,
             labels: sleepWeekDayNameLabels
           },
           x: {
             display: true,
             labels: sleepLabelsDate
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
   elementId: 'sleep-1',
   config: {
     type: 'line',
     data: {
       labels: sleepLabelsDate,
       datasets: [{
         label: 'sleep',
         data: sleepTime,
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
           text: 'sleep 1'
         }
       },
       scales: {
         x2: {
           display: sleepDisplay,
           labels: sleepWeekDayNameLabels
         },
         x: {
           display: true,
           labels: sleepLabelsDate
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
   elementId: 'sleep-2',
   config: {
     type: 'line',
     data: {
       labels: sleepLabelsDate,
       datasets:[{
         label: 'sleep',
         data: sleepTime,
         borderWidth: 4,
         backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
       }]
     },
     options: {
       scales: {
         x2: {
           display: sleepDisplay,
           labels: sleepWeekDayNameLabels
         },
         x: {
           display: true,
           labels: sleepLabelsDate
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
   elementId: 'sleep-3',
   config: {
     type: 'line',
     data: {
       labels: sleepLabelsDate ,
       datasets: [{
         label: 'sleep',
         data: sleepTime,
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
           display: sleepDisplay,
           labels: sleepWeekDayNameLabels
         },
         x: {
           display: true,
           labels: sleepLabelsDate
         },
         y: {
           beginAtZero: true
         }
       }
     }
   }
 },
 {
   elementId: 'sleep-4',
   config: {
     type: 'line',
     data: {
       labels: sleepLabelsDate,
       datasets: [{
         label: 'sleep',
         data: sleepTime,
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
           display: sleepDisplay,
           labels: sleepWeekDayNameLabels
         },
         x: {
           display: true,
           labels: sleepLabelsDate
         },
         y: {
           beginAtZero: true
         }
       }
     }
   }
 },
 {
   elementId: 'sleep-5',
   config: {
     type: 'line',
     data: {
       labels: sleepLabelsDate,
       datasets: [{
         label: 'sleep',
         data: sleepTime,
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
           display: sleepDisplay,
           labels: sleepWeekDayNameLabels
         },
         x: {
           display: true,
           labels: sleepLabelsDate
         },
         y: {
           beginAtZero: true
         }
       }
     }
   }
 },
 {
   elementId: 'sleep-6',
   config: {
     type: 'line',
     data: {
       labels: sleepLabelsDate,
       datasets: [{
         label: 'sleep',
         backgroundColor: '#8B93FF',
         borderColor: '#1E0342',
         data: sleepTime,
         borderWidth: 2,
         fill: true,
       }]
     },
     options: {
       scales: {
         x2: {
           display: sleepDisplay,
           labels: sleepWeekDayNameLabels
         },
         x: {
           display: true,
           labels: sleepLabelsDate
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
const chartsSleep = chartSleepConfigs.map(config => new Chart(document.getElementById(config.elementId).getContext('2d'), config.config));

// Event listener to toggle exDisplay when Ctrl + , is pressed
document.addEventListener('keydown', function(event) {
 if (event.ctrlKey && event.key === '.') {
   sleepDisplay = !sleepDisplay;
   updateSleepCharts();
 }
});

// Event listener to toggle dataset visibility when Ctrl + . is pressed
document.addEventListener('keydown', function(event) {
 if (event.ctrlKey && event.key === ',') {
   chartsSleep.forEach(chart => toggleSleepDatasetVisibility(chart, 0));
 }
});
