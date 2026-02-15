var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

// --- UTILITY FUNCTIONS ---

function inputLength() {
    return input.value.length;
}

// Function to create a delete button and attach it to an element
function createDeleteButton(parent) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    btn.classList.add("delete-btn");
    parent.appendChild(btn);
}

// --- CORE FUNCTIONS ---

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
    // Every new item gets a delete button
    createDeleteButton(li);
    
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// Function to manage clicks within the <ul>
function handleUlClick(event) {
    // If user clicks the delete button
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    } 
    // If user clicks the LI itself
    else if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

// --- INITIALIZATION ---

// Add delete buttons to the items already hardcoded in HTML
listItems.forEach(function(li) {
    createDeleteButton(li);
});

// --- EVENT LISTENERS ---

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", handleUlClick);