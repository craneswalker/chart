var ctx = document.getElementById('myChart').getContext('2d')

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2014", "2015", "2016"],
    datasets: [{
      label: "Number of students per year",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [73, 199, 395],
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# OF STUDENTS'
        },  
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'YEAR'
        },
      }]  
    }
  },
})