$("#button").click(function() {
  $.getJSON("api.php", function(response) {
    if(response.status) {
       $('#container').highcharts({
        title: {
            text: 'Some data',
        },
        series: [{
            name: 'data',
            data: response.data
        }]
      });
    } else {
      alert("error!");
    }
  });
});
