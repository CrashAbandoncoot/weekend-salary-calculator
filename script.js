function handleSubmit(event) {
    event.preventDefault();
}
//Function to gather information for new table rows onSubmit
function clickedSubmit(event) {
    let employeeInformationObject = {};
        employeeInformationObject.firstName = (document.getElementById("firstName" ).value);
        employeeInformationObject.lastName = (document.getElementById("lastName" ).value);
        employeeInformationObject.id = (document.getElementById("ID" ).value);
        employeeInformationObject.title = (document.getElementById("Title" ).value);
        employeeInformationObject.annualSalary = (document.getElementById("SalaryInput").value);
        addNewTableRow(employeeInformationObject);
        addMonthlyCosts(employeeInformationObject);
};

//function to append new table row
function addNewTableRow(object) {
    document.getElementById("tableBody").innerHTML += `<tr class="newInfo"> <td> ${object.firstName}</td> <td>${object.lastName}</td> <td>${object.id}</td> <td>${object.title}</td> <td>${object.annualSalary}</td> <td><button onclick="deleteRow(event)"> Delete </button></td> </tr>`
};

//function to delete row onclick
function deleteRow(event) {
    event.target.parentElement.parentElement.remove();
};

//Function for creating a sumation of salaries, and adding in a red background when value>20,000

let totalSalaray = 0;

function addMonthlyCosts(object) {
    let sum =  totalSalaray += Number(object.annualSalary);
    document.getElementById("totalCosts").innerHTML = `<div> Monthly Cost: ${sum / 12}</div>`
    if(totalSalaray > 240000){
        document.getElementById("totalCosts").style.backgroundColor= 'red';
    }

};
