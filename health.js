 // Load Chart.js library dynamically
 const script = document.createElement('script');
 script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
 script.onload = () => {
   // Once Chart.js is loaded, initialize the chart
   const actions = [
     {
       name: 'health: false (default)',
       handler: (chart) => {
         chart.data.datasets.forEach(dataset => {
           dataset.stepped = false;
         });
         chart.update();
       }
     },
     {
       name: 'Step: true',
       handler: (chart) => {
         chart.data.datasets.forEach(dataset => {
           dataset.stepped = true;
         });
         chart.update();
       }
     },
     {
       name: 'Step: before',
       handler: (chart) => {
         chart.data.datasets.forEach(dataset => {
           dataset.stepped = 'before';
         });
         chart.update();
       }
     },
     {
       name: 'Step: after',
       handler: (chart) => {
         chart.data.datasets.forEach(dataset => {
           dataset.stepped = 'after';
         });
         chart.update();
       }
     },
     {
       name: 'Step: middle',
       handler: (chart) => {
         chart.data.datasets.forEach(dataset => {
           dataset.stepped = 'middle';
         });
         chart.update();
       }
     }
   ];

   const data = {
     labels: ['06.05.24', '07.05.24', '08.05.24', '09.05.24', '11.05.24', '12.05.24'],
     datasets: [
       {
         label: 'Health Rate',
         data: [5, 6, 8, 4, 8,4],
         borderWidth: 4,
         backgroundColor: ['red', "blue", "yellow","green", "purple"],
         stepped: true, // Initial step interpolation
       }
     ]
   };

   const config = {
     type: 'line',
     data: data,
     options: {
       responsive: true,
       interaction: {
         intersect: false,
         axis: 'x'
       },
       plugins: {
         title: {
           display: true,
           // text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
         }
       },
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   };

   const ctx = document.getElementById('health-rate').getContext('2d');
   new Chart(ctx, config);
 };
 document.head.appendChild(script);