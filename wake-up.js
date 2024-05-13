const ctxWake = document.getElementById('wake-up');

new Chart(ctxWake, {
  type: 'line',
  data: {
    labels: ['06.05.24', '07.05.24', '08.05.24', '09.05.24', '11.05.24','12.05.24' ],
    datasets: [{
      label: 'wake up time',
      data: [4.4, 4.4, 5.10, 4.4, 5.20,4.20],
      borderWidth: 4,
      backgroundColor: ['red', "blue", "yellow","green", "purple" , "orange"],
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

