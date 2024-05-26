const labels = ['06.05', '07.05', '08.05', '09.05', '11.05', '12.05', '13.05', '14.05' , '15.05', '16.05', '17.05' , '18.05', '19.05','20.05', '21.05', '22.05', '23.05', '24.05', '25.05', '26.05'];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'go bed',
            data: [8.50, 9.20, 9.20, 9.40, 10.40, 9.40,10.00,9.00 ,9.00,9.20,9.30,9.50,9.20,9.10,9.10,10.10,9.35,10.10,9.10,9.13],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'sleep',
            data: [9.20, 9.40, 9.40, 10.00, 10.20,10.20,10.40,9.40,9.30,9.50,9.50,10.30,9.50,9.50,10.00,10.35,10.20,10.50,9.50,10.00],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            yAxisID: 'y1',
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            }
        },
        scales: {
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
    },
};

const ctxSleep = document.getElementById('sleep').getContext('2d');
new Chart(ctxSleep, config);
