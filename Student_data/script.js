document.addEventListener('DOMContentLoaded', () => {
    const Students = [
        {
            Name: "SaiKiran",
            Age: 20,
            RollNumber: "22A91A1252",
            Gender: "Male",
            Branch: "IT"
        },
        {
            Name: "ShivaKumar",
            Age: 21,
            RollNumber: "22A91A1237",
            Gender: "Male",
            Branch: "IT"
        },
        {
            Name: "RamKiran",
            Age: 22,
            Gender: "Male",
            RollNumber: "22A91A1206",
            Branch: "IT"

        },
        {
            Name: "GowriShankar",
            Age: 20,
            RollNumber: "22A91A1207",
            Gender: "Male",
            Branch: "IT"
        },

    ];

    const studentTable = document.getElementById("my_table");
    const click_button = document.getElementById("add_button");

    function loadTable() {
        studentTable.innerHTML = "";
        const hrow = studentTable.insertRow();
        hrow.insertCell().innerText = "Name";
        hrow.style.fontSize = "20px";
        hrow.style.fontFamily = "arial";
        hrow.style.backgroundColor = "#f07167";
        hrow.style.fontWeight = "Bold";

        hrow.insertCell().innerText = "Age";
        hrow.insertCell().innerText = "RollNumber";
        hrow.insertCell().innerText = "Gender";
        hrow.insertCell().innerText = "Branch";
        hrow.insertCell().innerText = "Update";
        hrow.insertCell().innerText = "Delete";



        Students.forEach((student, index) => {
            const row = studentTable.insertRow();
            row.style.backgroundColor = "#fed9b7";


            row.insertCell().innerText = student.Name;
            row.insertCell().innerText = student.Age;
            row.insertCell().innerText = student.RollNumber;
            row.insertCell().innerText = student.Gender;
            row.insertCell().innerText = student.Branch;
            const updateCell = row.insertCell();
            const updateButton = document.createElement("button");
            updateButton.innerText = "Update";
            updateButton.onclick = () => updateStudent(index);
            updateCell.appendChild(updateButton);
            const deleteCell = row.insertCell();
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.onclick = () => deleteStudent(index);
            deleteCell.appendChild(deleteButton);
            const cells = document.querySelectorAll('td');


        });
    }

    function updateStudent(index) {
        const newName = prompt("Enter new Name:", Students[index].Name);
        const newAge = prompt("Enter new Age:", Students[index].Age);
        const newRoll = prompt("Enter new RollNumber:", Students[index].RollNumber);
        const newGender = prompt("Enter new Gender:", Students[index].Gender);
        const newBranch = prompt("Enter  new  Branch:", Students[index].Branch);
        if (newName !== null && newAge !== null && newGender !== null && newBranch != null && newRoll != null) {
            Students[index] = { Name: newName, Age: parseInt(newAge), RollNumber: newRoll, Gender: newGender, Branch: newBranch };
            loadTable();

        }
    }
    function deleteStudent(index) {
        Students.splice(index, 1);
        loadTable();
    }
    click_button.addEventListener('click', () => {
        click_button.addEventListener('dblclick', addNewStudent);
        loadTable();
    });
    function addNewStudent() {
        const Name = prompt("Enter name:");
        const Age = prompt("Enter age:");
        const RollNumber = prompt("Enter RollNumber:");
        const Gender = prompt("Enter gender:");
        const Branch = prompt("Enter branch:");
        if (Name !== null && Age !== null && Gender !== null && Branch != null && RollNumber != null) {
            Students.push({ Name, Age: parseInt(Age), RollNumber, Gender, Branch });
            loadTable();
        }
    }
    click_button.addEventListener('click', () => {
        loadTable();
        click_button.addEventListener('dblclick', addNewStudent);
    });
});