# Weekend-Salary-Calculator

## Description

Duration: Two week sprint.

The problem that was solved during this project was to create an html site that takes in user data, stores the data, and returns the data as a total value input with a monthly limitation on the sumation being $20,000. 

To address this problem I first created an HTML file that houses the input fields, submission buttons with linked onclick event functions, and the data table. Following the HTML file a JS file was created to house the functions behind the submission fields and buttons. I created an onsubmit button that would pull the user input data and create new variables and append the values to the DOM, eventually appending the data directly into the table. Lastly I had to create a second function, which focused on pulling the last input fields data and added the newly input value to the previous summed total. Once this total reached higher than 20,000 for the monthly value the background color was set to change red to signifiy that the spending was over budget.

ReadMe.png

Installation:

No additional features are required to be installed. If you would like to have this be hosted on a temporary server NPM would be required to be installed along with Express.

Usage:

Enter data into input fields.
Click submit to transfer data into calculator.
After data has been entered and submitted monthly costs will be calculated.


Built With
My own two hands and some nifty javascript

Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. 

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
