window.onload = function () {
    document.getElementById("addButton").onclick = addTaskBtn;
};
function addTaskBtn() {
    let addTask = document.getElementById("taskInput").value;
    if (addTask == "") {
        alert("Please provide a task!");
    }
    else {
        let taskDiv = createTaskDiv();
        let doneCheckBox = createDoneCheckBoxForTask();
        let taskSpan = createTaskSpan(addTask);
        let deleteButton = createTaskDeleteButton();
        createCompleteTaskDiv(taskDiv, doneCheckBox, taskSpan, deleteButton);
        appendTaskDivToWebPage(taskDiv);
    }
}
function appendTaskDivToWebPage(taskDiv) {
    let taskList = document.getElementById("taskList");
    taskList.appendChild(taskDiv);
}
function createCompleteTaskDiv(taskDiv, doneCheckBox, taskSpan, deleteButton) {
    taskDiv.appendChild(doneCheckBox);
    console.log(taskDiv);
    taskDiv.appendChild(taskSpan);
    console.log(taskDiv);
    taskDiv.appendChild(deleteButton);
    console.log(taskDiv);
}
function createTaskDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.onclick = removeTaskSecondVersion;
    deleteButton.innerText = "X";
    console.log(deleteButton);
    return deleteButton;
}
function createTaskSpan(addTask) {
    let taskSpan = document.createElement("span");
    taskSpan.classList.add("taskName");
    taskSpan.innerText = addTask;
    console.log(taskSpan);
    return taskSpan;
}
function createDoneCheckBoxForTask() {
    let doneCheckBox = document.createElement("input");
    doneCheckBox.type = "checkbox";
    doneCheckBox.classList.add("done");
    console.log(doneCheckBox);
    return doneCheckBox;
}
function createTaskDiv() {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("tasks");
    console.log(taskDiv);
    return taskDiv;
}
function removeTaskSecondVersion() {
    let targetTaskDiv = this.parentElement;
    targetTaskDiv.remove();
}
