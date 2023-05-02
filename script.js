function handleSubmit(event) {
    event.preventDefault();
}


// var object = {
//     firstName: "Deniz",
//     lastName: "Burdurgolu",
//     id:19484242,
//     title: "Full Stack Developer",
//     annualSalary: "75000"
// },
// {
//     firstName: "Deniz",
//     lastName: "Burdurgolu",
//     id:19484242,
//     title: "Full Stack Developer",
//     annualSalary:75000
// };


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
    document.getElementById("tableBody").innerHTML = `<tr> ${object.firstName}, ${object.lastName}, ${object.id}, ${object.title}, ${object.annualSalary} </tr>`
}

//Headers.set(id="FirstName", object.firstName), I think I need to use this to append to the table