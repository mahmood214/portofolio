let container = document.querySelector(".container");

let input = document.querySelector(".creat-task"),
    add = document.querySelector(".add-task"),
    defaultMassage = document.querySelector(".default-massage"),
    defaultTask = document.querySelector(".created-task");

let completeAll = document.querySelector(".complete-all"),
    deleteAll = document.querySelector(".delete-all");

let complete = document.querySelectorAll(".complete"),
    Delete = document.querySelectorAll(".delete");

let info = document.querySelector(".info");

let completedTasks = document.querySelector(".completed-tasks>span"),
    allTasks = document.querySelector(".all-tasks>span");

let task = input.value;
let allTasksText = document.querySelectorAll(".the-task");


let sweetAlert = document.querySelector(".sweet-alert"),
    sweetAlertOk = document.querySelector(".ok"),
    sweetAlertText = document.querySelector(".sweet-alert>span");

window.onload = () => {
    input.focus();
}

add.onclick = () => {

    task = input.value;
    allTasksText.forEach(ele => {
        if (task == ele.textContent) {
            sweetAlertFunc("this task is already exist");
            info.previousElementSibling.remove();
        }
    });

    if (task.length > 0) {
        creatTheTask();
        defaultMassage.style.display = "none";
        input.value = "";
        completeAll.classList.remove("done");
    } else if (task.length == 0) {
        sweetAlertFunc("please put some words the task is empty");
    }
    refresh();
    completeAllChecker();
    completeFunc();
    deleteFunc();
    completeAllFunc();
    deleteAllFunc();
}

// localStorage.getItem("data");
// localStorage.setItem("data", data);


let refresh = () => {
    complete = document.querySelectorAll(".complete");
    Delete = document.querySelectorAll(".delete");
    Tasks = document.querySelector(".created-task");
    allTasksText = document.querySelectorAll(".the-task");
    allTasks.textContent = document.querySelectorAll(".created-task").length;
    completedTasks.textContent = document.querySelectorAll(".the-task.done").length;
}

let completeAllChecker = () => {
    if (document.querySelectorAll(".the-task.done").length < document.querySelectorAll(".the-task").length) {
        completeAll.classList.remove("done");
    };
    if (document.querySelectorAll(".the-task.done").length == document.querySelectorAll(".the-task").length) {
        completeAll.classList.add("done");
    }
    if (document.querySelectorAll(".the-task.done").length == 0) {
        completeAll.classList.remove("done");
    };
}

function sweetAlertFunc(text) {
    sweetAlert.style.display = "block";
    sweetAlertText.textContent = text
    setTimeout(() => {
        sweetAlert.style.opacity = "0.9";
    }, 100)
    sweetAlertOk.onclick = () => {
        sweetAlert.style.opacity = "0";
        setTimeout(() => {
            sweetAlert.style.display = "none";
        }, 1000)
    }
    sweetAlert.onmouseleave = () => {
        sweetAlert.style.opacity = "0";
        setTimeout(() => {
            sweetAlert.style.display = "none";
        }, 5000)
    }
}

let creatTheTask = () => {
    defaultTask.remove();
    const newTask = defaultTask.cloneNode(true);
    newTask.style.display = "block";
    container.insertBefore(newTask, info);
    newTask.firstElementChild.textContent = task;
}

let deleteFunc = () => {
    Delete.forEach((el) => {
        el.onclick = () => {
            console.log("delet");
            el.parentElement.parentElement.remove();
            console.log("ok")
            if (document.querySelectorAll(".created-task").length == 0) {
                defaultMassage.style.display = "block";
            }
            refresh();
            completeAllChecker();
        }
    })
}
let deleteAllFunc = () => {
    deleteAll.onclick = () => {
        let allCreatedTasks = document.querySelectorAll(".created-task");
        completeAll.classList.remove("done");
        defaultMassage.style.display = "block";
        allCreatedTasks.forEach(el => {
            el.remove();
        })
        refresh();
    }
}

let completeFunc = () => {
    complete.forEach((el) => {
        el.onclick = () => {
            el.parentElement.previousElementSibling.classList.toggle("done");
            el.classList.toggle("done");
            refresh();
            completeAllChecker();
        }
    })
}

let completeAllFunc = () => {
    completeAll.onclick = () => {
        if (document.querySelectorAll(".the-task").length >= 1) {
            allTasksText.forEach(element => {
                element.classList.add("done");
            });
            complete.forEach((el) => {
                el.classList.add("done");
            })
            completeAll.classList.add("done");
        }
        refresh();
    }
}
