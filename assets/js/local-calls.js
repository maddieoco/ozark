function GetRiverLevels() {
    "use strict";

    /* URL for AJAX Call*/
    var myURL1 = "//waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055660, 07055646, 07055680, 07055780&period=P7D&parameterCd=00065&siteStatus=active";
    /* AJAX Method (POST or GET) */
    var myMethod1 = "GET";

       /* Make sure the document is ready */
    $(document).ready(function() { 

        /* Perform AJAX call - Note that the AJAX function 
           does not have a selector */

        $.ajax({
          method: myMethod1,
          url: myURL1
        })

        /* AJAX complete - result is in msg */
          .done(function( msg ) { 
              
                var dates = [];  /* dates  contains the dates for the river data */
                var values = []; /* values contains the height values for the river data */
                
                /* fLen contains the length of the array (number of values) */
                var fLen = msg.value.timeSeries[0].values[0].value.length;
                for (var i = 0; i < fLen; i++) {
                	values[i] = msg.value.timeSeries[0].values[0].value[i].value;
                	dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime;
                }
                
                var sitename = msg.value.timeSeries[0].sourceInfo.siteName;  /* sitename contains the long name of the site */
                var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value;  /* sitecode contains the site ID number */
                var siteDescription = msg.value.timeSeries[0].variable.variableDescription;  /* siteDesription contains the units of of the site */

              
                /* Put your code here to display a graph of the values and dates arrays*/
                /* You can also use sitename, sitecode, and siteDescription to enhance your chart */
              
               /* var ctx = document.getElementById("chartjs-0");*/
var ctx = document.getElementById("chartjs-0");
			var myChart = new Chart(ctx, {
				"type":"line",
				"data": {
					"labels": dates,
					"datasets":[{"label":"Gauge Height",
					"data": values,
					"fill":false,
					"borderColor":"rgb(75, 192, 192)",
					"lineTension":0.1}]},
					"options":{ 
						responsive: false,
    					maintainAspectRatio: true,
        				title: {
            				display: true,
            				text: sitename + ' - PID: ' + sitecode,
							fontSize : 18
        				},
						scales: {
            				xAxes: [{
                				type: 'time',
                				time: {
                  					 displayFormats: {
                        				day: 'MMM D'
                    				}
								}
							}],

							yAxes: [{
								scaleLabel: {
									display: true,
									labelString: siteDescription
								}
							}]

						}
					}
				}
			);
               /* var myChart = new Chart(ctx, {
                    "type":"line",
                    "data": {
                        "labels": dates,
                        "datasets":[{"label":"River Levels",
                        "data": values,
                        "fill": false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1
                        }]
                    },
                    "options":{ 
                        responsive: false,
                        maintainAspectRatio: true,
                            legend: {
                            position: 'top',
                            },
                            title: {
                            display: true,
                            text: 'X Site River Level'
                            },
                            scales: {
                                xAxes: {
                                    type: 'time',
                                    time: {
                                    displayFormats: {
                        				day: 'MMM D'
                    				}
								    
                                       
                                    }
                                }
                            }
                    }
                    
                });  */        
          
          }); 
                
        });
}
