const ToDoList = document.getElementById("ToDoList");
// 
const button = document.getElementById("Enter");

// targets the button we click
const inputBox = document.getElementById('newToDo');

// targets the container that we type in
const inputContainer = document.getElementById('input-container')

// a function that adds items to my list
let addToList = () => {
  let listItem = document.createElement('li');
  listItem.innerHTML = inputBox.value;
  ToDoList.insertBefore(listItem, inputContainer);
  inputBox.value = "";
}
// clicking the button, targeting the sibling of the previous element
button.addEventListener('click', addToList);

ToDoList.addEventListener('click', (e) => {
  // creating a function that will target line items (that are NOT the input container) to remove them from our list on click. 
  if (e.target.tagName == "LI" && e.target.id != 'input-container'){
    // When a list item is clicked, cross it out, then remove it after 1 second.
    e.target.style.textDecoration = 'line-through';
    setTimeout( () => e.target.remove(), 1000);
  }
})


