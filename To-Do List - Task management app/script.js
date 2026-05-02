const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return alert("Please Enter Your Task!");

    // 1. Create LI element
    const li = document.createElement("li");

    // 2. Add Task Text & Click to Toggle Complete
    li.innerHTML = `
        <span onclick="toggleTask(this)">${text}</span>
        <span class="delete-btn" onclick="deleteTask(this)">✕</span>
    `;

    // 3. Append to List
    taskList.appendChild(li);

    // 4. Clear Input
    taskInput.value = "";
}

function toggleTask(element) {
    element.classList.toggle("completed");
}

function deleteTask(element) {
    element.parentElement.remove();
}

// Enter key support
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});