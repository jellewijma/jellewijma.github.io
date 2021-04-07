$(document).ready(function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myRadarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Development",
        "Design",
        "Managment",
        "Content Creation",
        "Creativity",
        "Photography",
      ],
      datasets: [
        {
          label: 'Me',
          data: [7, 7, 8, 5, 8, 6],
          backgroundColor: "#D8FFDD11",
          borderColor: "#D8FFDD"
        },{
          label: 'Others',
          data: [5, 5, 5, 5, 5, 5],
          backgroundColor: "#DBFCFF11",
          borderColor: "#DBFCFF",
        }
      ],
    },
    options: {
      scale: {
        angleLines: {
          display: false,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 10,
        },
        legend: {
          defaultFontSize: 100,
        },
      },
    },
  });
});
