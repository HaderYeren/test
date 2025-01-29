function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
      let li = document.createElement("li");
      li.textContent = task.text;
      if (task.completed) li.classList.add("completed");
      li.onclick = () => toggleTask(index);
      taskList.appendChild(li);
  });
}
function addTask() {
  let taskText = document.getElementById("taskInput").value;
  if (!taskText) return;
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}
function toggleTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}
loadTasks();

function saveFormData() {
  localStorage.setItem("name", document.getElementById("nameInput").value);
  localStorage.setItem("email", document.getElementById("emailInput").value);
}
document.getElementById("nameInput").value = localStorage.getItem("name") || "";
document.getElementById("emailInput").value = localStorage.getItem("email") || "";

function registerUser() {
  localStorage.setItem("user", JSON.stringify({
      login: document.getElementById("login").value,
      password: document.getElementById("password").value
  }));
}
function loginUser() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) return alert("Користувач не зареєстрований");
  if (user.login === document.getElementById("login").value &&
      user.password === document.getElementById("password").value) {
      alert("Вхід успішний");
  } else {
      alert("Невірний логін або пароль");
  }
}

function loadBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const list = document.getElementById("bookmarkList");
  list.innerHTML = "";
  bookmarks.forEach((bm, index) => {
      let li = document.createElement("li");
      li.innerHTML = `<a href="${bm.url}" target="_blank">${bm.name}</a> <button onclick="removeBookmark(${index})">Видалити</button>`;
      list.appendChild(li);
  });
}
function addBookmark() {
  let name = document.getElementById("bookmarkName").value;
  let url = document.getElementById("bookmarkUrl").value;
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  loadBookmarks();
}
function removeBookmark(index) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  loadBookmarks();
}
loadBookmarks();

function loadContacts() {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const list = document.getElementById("contactList");
  list.innerHTML = "";
  contacts.forEach((c, index) => {
      let li = document.createElement("li");
      li.innerHTML = `${c.name} - ${c.phone}, ${c.email} <button onclick="removeContact(${index})">Видалити</button>`;
      list.appendChild(li);
  });
}
function addContact() {
  let name = document.getElementById("contactName").value;
  let phone = document.getElementById("contactPhone").value;
  let email = document.getElementById("contactEmail").value;
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push({ name, phone, email });
  localStorage.setItem("contacts", JSON.stringify(contacts));
  loadContacts();
}
function removeContact(index) {
  let contacts = JSON.parse(localStorage.getItem("contacts"));
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  loadContacts();
}
loadContacts();