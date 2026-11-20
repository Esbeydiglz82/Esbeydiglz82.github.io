
function updatePage()
{
    var name = document.getElementById("userName").value;
    var message = document.getElementById("userMessage").value;
    var color = document.getElementById("backgroundColor").value;

    if (name == "")
    {
        document.getElementById("greeting").innerHTML = "Hello User!";
    }
    else
    {
        document.getElementById("greeting").innerHTML = "Hello " + name + "!";
    }

    if (message != "")
    {
        document.getElementById("message").innerHTML = message;
    }

    document.body.style.backgroundColor = color;
}

function addTask()
{
    var task = document.getElementById("taskInput").value;

    if (task != "")
    {
        var newTask = document.createElement("li");
        newTask.innerHTML = task;
        document.getElementById("taskList").appendChild(newTask);
        document.getElementById("taskInput").value = "";
    }
}
