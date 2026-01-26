const input =
document.getElementById("todo-input");
const button =
document.getElementById("todo-button");
const list =
document.getElementById("todo-list");

button.addEventListener("click", () =>
{
const text = input.value.trim();
if (text !== "")
{
addTodo(text);
input.value = "";
}
});

function addTodo(text)
{
const li = document.createElement("li");
li.textContent = text;

li.addEventListener("click", () =>
{
li.classList.toggle("done");
});

const delBtn =
document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.addEventListener("click", () =>
{
  list.removeChild(li);
});

li.appendChild(delBtn);
list.appendChild(li);
}