
document.addEventListener('DOMContentLoaded',  function(){
    const chart = Highcharts.chart('bloc-charts',{
        chart:{
            type: 'spline'
        },
        title: {
            text: ' Grades',
        },
        xAxis:{
            categories:['Mon','Tue','Wed','Thur','Fri','Sat','Sun']
        },
        yAxis:{
            title:{
              text: 'Hours'  
            }
        },
        series: [{
            name:'Synopis',
            data:[1,2,3,4,5,6,7],
            color: '#000620',
        },{
            name:'Total time',
            data: [3,2,5,4,3,6,1],
            color: '#58585a'
        }]
    });
});
