var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["Priority"] = document.getElementById("Priority").value;
    formData["status"] = document.getElementById("status").value;
    formData["date"] = document.getElementById("date").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("tableList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Priority;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.status;
    cell4 = newRow.insertCell(3);

    // const nowDate = new Date();
    // const currentDateTime = now.toLocaleString();

    // var currentDate = new Date().toLocaleString();
    // cell4.innerHTML = data.currentDate;


    cell4.innerHTML = data.date;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("Priority").value = "";
    document.getElementById("status").value = "";
    document.getElementById("date").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Priority").value = selectedRow.cells[1].innerHTML;
    document.getElementById("status").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.Priority;
    selectedRow.cells[2].innerHTML = formData.status;
    selectedRow.cells[3].innerHTML = formData.date;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("title").value == "" || document.getElementById("Priority").value == "" || document.getElementById("status").value == "") {
        isValid = false;
        document.getElementById("titleValidationError").classList.remove("hide");
        document.getElementById("titleValidationError1").classList.remove("hide");
        document.getElementById("titleValidationError2").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("titleValidationError").classList.contains("hide"))
            document.getElementById("titleValidationError").classList.add("hide");

            if (!document.getElementById("titleValidationError1").classList.contains("hide"))
            document.getElementById("titleValidationError1").classList.add("hide");

            if (!document.getElementById("titleValidationError2").classList.contains("hide"))
            document.getElementById("titleValidationError2").classList.add("hide");
    }
    return isValid;
}