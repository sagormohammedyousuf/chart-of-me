


const ctxWake = document.getElementById('wake-up');
var wakeDisplay = false;

// Function to update the chart options and re-render the chart
function updateChart() {
  const chartOptions = {
    scales: {
      x : {
        labels: ['06.05', '07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05', '18.05', '19.05', '20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'],
      },
      x2: {
        display: wakeDisplay,
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      y: {
        beginAtZero: true
      }
    }
  };

  // Re-render the chart with updated options
  myChart.options = chartOptions;
  myChart.update();
}

// Create the initial chart
var myChart = new Chart(ctxWake, {
  type: 'line',
  data: {
    labels: ['06.05', '07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05', '18.05', '19.05', '20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'],
    datasets: [{
      label: 'Wake up time',
      data: [4.4, 4.4, 5.10, 4.4, 5.00, 5.20, 4.40, 4.40, 4.35, 4.35, 4.35, 4.35, 4.35, 5.10, 4.40, 4.35, 4.35, 4.40, 5.00, 4.35, 4.35],
      borderWidth: 4,
      backgroundColor: ['red', "blue", "yellow", "green", "purple", "orange"],
    }]
  },
  options: {
    
    scales: {
      x2: {
        display: wakeDisplay,
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      y: {
        beginAtZero: true
      }
    },

    legend: {
      display: false,
      labels: {
          fontColor: 'rgb(255, 99, 132)'
      }
  }
    
  }
});

// Event listener to toggle wakeDisplay when Ctrl+, is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === ',') {
    wakeDisplay = !wakeDisplay; // Toggle wakeDisplay
    updateChart(); // Update the chart with the new display setting
  }
});




// key for hide data /



 // Function to toggle dataset visibility
 function toggleDatasetVisibility(chart, datasetIndex) {
  var meta = chart.getDatasetMeta(datasetIndex);
  meta.hidden = meta.hidden === null ? !chart.data.datasets[datasetIndex].hidden : null;
  chart.update();
}

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === '.') {
      toggleDatasetVisibility(myChart, 0); // Assuming 'Exercise min' is the first dataset
  }
});







// // Define a shortcut key (Shift + S)
