const arr = [
    "Satyam",
    "Hello",
    "Ayush",
    "LNCT",
    "Bhopal",
];

const list = document.createElement("ol");

arr.forEach((item) => {
    const l = document.createElement("li");
    l.textContent = item;
    list.appendChild(l);
});

document.getElementById("mylist").appendChild(list);