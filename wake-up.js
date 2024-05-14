const ctxWake = document.getElementById('wake-up');

new Chart(ctxWake, {
  type: 'line',
  data: {
    labels: ['06.05', '07.05', '08.05', '09.05', '11.05', '12.05', '13.05', '14.05' ],
    datasets: [{
      label: 'wake up time',
      data: [4.4, 4.4, 5.10, 4.4, 5.20,4.40,4.40,4.35],
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

