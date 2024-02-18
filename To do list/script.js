// Get references to DOM elements
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.getElementById("myList");

// Check the length of the input value
function inputLength() {
	return input.value.length;
}

// Create a new list item
function createListElement() {
  // Create the list item and delete button
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  // Add the delete icon
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

  // Add classes to the delete button
  deleteButton.classList.add("deleteButton");

  // Add event listener to delete button
  deleteButton.addEventListener("click", function() {
    const listItem = this.parentNode;
    listItem.parentNode.removeChild(listItem);
  });

  // Add delete button and input value to the list item
  li.appendChild(deleteButton);
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  // Clear the input value
  input.value = "";
}

// Add a new list item after click event
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Add a new list item after keypress event
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Add event listeners to button and input
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Toggle the "done" class when clicking on a list item
ul.addEventListener("click", function clickListItem(event) {
  if (event.target.classList.contains("done")) {
    event.target.classList.remove("done");
  } else {
    event.target.classList.add("done");
  }
});

// Add event listeners to all delete buttons
const deletingButtons = document.querySelectorAll(".deleteButton");
deletingButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      const listItem = event.target.parentNode;
      listItem.remove();
    }
  });
});