function handleSubmit(event) {
    event.preventDefault();
}

function clickedSubmit(event) {
    let employeeInformationObject = {};
    employeeInformationObject.firstName = (document.getElementById("firstName" ).value);
    employeeInformationObject.lastName = (document.getElementById("lastName" ).value);
    employeeInformationObject.id = (document.getElementById("ID" ).value);
    employeeInformationObject.title = (document.getElementById("Title" ).value);
    employeeInformationObject.annualSalary = (document.getElementById("SalaryInput" ).value);
    addNewTableRow(employeeInformationObject);
}

function addNewTableRow(object) {
    document.getElementById("tableBody").innerHTML += `<tr> <td> ${object.firstName}</td> <td>${object.lastName}</td> <td>${object.id}</td> <td>${object.title}</td> <td>${object.annualSalary}</td> <td><button onclick="deleteRow(event)"> Delete </button></td> </tr>`
}

function deleteRow(event) {
    document.getElementById("tableBody").childElement.remove();
};

//This function works and adds in a new row but is all in one comma deliminated row
// function addNewTableRow(object) {
//     document.getElementById("tableBody").innerHTML = `<tr> ${object.firstName}, ${object.lastName}, ${object.id}, ${object.title}, ${object.annualSalary} </tr>`
// }

//Headers.set(id="FirstName", object.firstName), I think I need to use this to append to the table