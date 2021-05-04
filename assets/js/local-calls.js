    /* Make sure the document is ready */
    $(document).ready(function() { 
		
		/* URL for AJAX Call*/
	    var myURL1 = "//waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055660, 07055646, 07055680, 07055780&period=P7D&parameterCd=00065&siteStatus=active";
	    /* AJAX Method (POST or GET) */
	    var myMethod1 = "GET";
		
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
            var ctx0 = document.getElementById("chartjs-0");
			var myChart0 = new Chart(ctx0, {
				"type":"line",
				"data": {
					"labels": dates,
					"datasets":[{"label":"Gage Height",
					"data": values,
					"fill":false,
					"borderColor":"rgb(20, 145, 144)",
					"lineTension":0.1}]},
					"options":{ 
						responsive: false,
    					maintainAspectRatio: true,
        				title: {
            				display: true,
            				text: sitename,
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
                
                
                var dates = [];  /* dates  contains the dates for the river data */
                var values = []; /* values contains the height values for the river data */
                
                var fLen = msg.value.timeSeries[1].values[0].value.length;
                for (var i = 0; i < fLen; i++) {
                	values[i] = msg.value.timeSeries[1].values[0].value[i].value;
                	dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime;
                }
                
                var sitename = msg.value.timeSeries[1].sourceInfo.siteName;  /* sitename contains the long name of the site */
                var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value;  /* sitecode contains the site ID number */
                var siteDescription = msg.value.timeSeries[1].variable.variableDescription;  /* siteDesription contains the units of of the site */

              
                /* Put your code here to display a graph of the values and dates arrays*/
                /* You can also use sitename, sitecode, and siteDescription to enhance your chart */
              
               /* var ctx = document.getElementById("chartjs-0");*/
            var ctx1 = document.getElementById("chartjs-1");
			var myChart = new Chart(ctx1, {
				"type":"line",
				"data": {
					"labels": dates,
					"datasets":[{"label":"Gage Height",
					"data": values,
					"fill":false,
					"borderColor":"rgb(20, 145, 144)",
					"lineTension":0.1}]},
					"options":{ 
						responsive: false,
    					maintainAspectRatio: true,
        				title: {
            				display: true,
            				text: sitename,
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
             
                var dates = [];  /* dates  contains the dates for the river data */
                var values = []; /* values contains the height values for the river data */
                
                var fLen = msg.value.timeSeries[2].values[0].value.length;
                for (var i = 0; i < fLen; i++) {
                	values[i] = msg.value.timeSeries[2].values[0].value[i].value;
                	dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime;
                }
                
                var sitename = msg.value.timeSeries[2].sourceInfo.siteName;  /* sitename contains the long name of the site */
                var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value;  /* sitecode contains the site ID number */
                var siteDescription = msg.value.timeSeries[2].variable.variableDescription;  /* siteDesription contains the units of of the site */

              
                /* Put your code here to display a graph of the values and dates arrays*/
                /* You can also use sitename, sitecode, and siteDescription to enhance your chart */
              
               /* var ctx = document.getElementById("chartjs-0");*/
            var ctx2 = document.getElementById("chartjs-2");
			var myChart = new Chart(ctx2, {
				"type":"line",
				"data": {
					"labels": dates,
					"datasets":[{"label":"Gage Height",
					"data": values,
					"fill":false,
					"borderColor":"rgb(20, 145, 144)",
					"lineTension":0.1}]},
					"options":{ 
						responsive: false,
    					maintainAspectRatio: true,
        				title: {
            				display: true,
            				text: sitename,
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
              
                var dates = [];  /* dates  contains the dates for the river data */
                var values = []; /* values contains the height values for the river data */
                
                var fLen = msg.value.timeSeries[3].values[0].value.length;
                for (var i = 0; i < fLen; i++) {
                	values[i] = msg.value.timeSeries[3].values[0].value[i].value;
                	dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime;
                }
                
                var sitename = msg.value.timeSeries[3].sourceInfo.siteName;  /* sitename contains the long name of the site */
                var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value;  /* sitecode contains the site ID number */
                var siteDescription = msg.value.timeSeries[3].variable.variableDescription;  /* siteDesription contains the units of of the site */

              
                /* Put your code here to display a graph of the values and dates arrays*/
                /* You can also use sitename, sitecode, and siteDescription to enhance your chart */
              
               /* var ctx = document.getElementById("chartjs-0");*/
            var ctx3 = document.getElementById("chartjs-3");
			var myChart = new Chart(ctx3, {
				"type":"line",
				"data": {
					"labels": dates,
					"datasets":[{"label":"Gage Height",
					"data": values,
					"fill":false,
					"borderColor":"rgb(20, 145, 144)",
					"lineTension":0.1}]},
					"options":{ 
						responsive: false,
    					maintainAspectRatio: true,
        				title: {
            				display: true,
            				text: sitename,
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
            
              
              
          
          }); 
        });
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Contact Page
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);
