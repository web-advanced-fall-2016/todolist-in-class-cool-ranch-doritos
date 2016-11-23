let baseURL = "http://localhost:3000";
var i;

(function() {
    let list = document.getElementById('taskList');

    //load existing data
    $.ajax({
        url: baseURL + '/tasks',
        method: "GET"
    }).done(function(response) {
        console.log('response working');

        for (let i = 0; i < response.length; i++) {
            let count = i;
            console.log(response.length);

            //create element
            let newTask = document.createElement('div');
            newTask.className = 'task';

            list.appendChild(newTask);

            let task = document.createElement('p');
            task.innerHTML = response[i].task;

            //create the delete button
            let deleteButton = document.createElement('button');
            //set the delete button ID to deleteButton
            deleteButton.id = 'deleteButton';
            //add a value to our button
            deleteButton.innerText = 'X';

            deleteButton.addEventListener('click', function(e) {
                e.preventDefault();
                deleteTask(e);
            });

            //append the task to the taskdiv
            newTask.appendChild(task);

            //append the delete button to the newTask div
            newTask.appendChild(deleteButton);

            myList.appendChild(list);
        }
    });

})();

//testing

let sendTask = function(data) {
    $.ajax({
        type: "POST",
        url: baseURL + '/tasks',
        data: data,
        success: console.log("sent")
    })

    let config = {
        method: "GET",
        headers: new Headers({})
    }

    let request = new Request(`${baseURL}/tasks`, config);
    fetch(request)
        .then(function(res) {
            if (res.status == 200)
                return res.json();
            else
                throw new Error('Something went wrong on server!');
        })
        .then(function(res) {
            console.log(res.length);
            saveTask();
            deleteTask();
        })
        .catch(function(err) {
            console.warn(`Couldn't fetch info list`);
            console.log("err");
        });
};


//testing

function saveTask() {
    let taskInput = document.getElementById("newTask");
    let todo = taskInput.value;

    if (todo) {
        newTodo = { description: todo, id: i };
        sendTask(newTodo);
    }

    let newTask = document.createElement('div');
    newTask.classList.add('task');
    console.log(todo);
    // todoDiv.innerHTML += `<li class='todoName'>${todo}</p><span class='deleteTodo'>x</span>`;

    newTask.id = i++;
    taskInput.appendChild(newTask);
    taskInput.value = "";
};





// //update task list
// var updateTasks = function(){
//     var taskListHolding = document.getElementById('taskList');

//   //empty the task lisk
//   taskListHolding.innerHTML='';
//   //determine task list length
//   var len = taskArray.length;
//   var i;

//   for(i=0; i<len; i++){
//     console.log('task ' + i + ": " + taskArray[i]);
//     //create element
//     var newTask = document.createElement('div');

//     //define the div's ID and it's class
//     newTask.id = i;
//     newTask.className ='task';

//      //create the task paragraph 
//     var task = document.createElement('p');

//     //assign the 'task' to the task div
//     task.innerHTML = taskArray[i];

//     //create the delete button
//     var deleteButton = document.createElement('button');
//     //set the delete button ID to deleteButton
//     deleteButton.id = 'deleteButton';
//     //add a value to our button
//     deleteButton.innerText='X'; //or 'close', 'exit', whatever you want

//     //listen for the click
//     deleteButton.addEventListener('click', function(e){
//       e.preventDefault();
//       deleteTask(e);
//     });

//     //append the task to the taskdiv
//     newTask.appendChild(task);

//     //append the delete button to the newTask div
//     newTask.appendChild(deleteButton);

//     //append the taskDiv to the tasklistholding Div
//     taskListHolding.appendChild(newTask);

//     //append the tasklistholding Div to the body Div
//     myAwesomeToDoList.appendChild(taskListHolding);

//   };

//   if (taskArray.length > 0){

//     //create the delele All button
//     var deleteAll = document.createElement("button");

//     //set the delete All button ID to deleteAll
//     deleteAll.id = 'deleteAll';

//     //add a value to our delete All button
//     deleteAll.innerText = "Delete  All";

//     deleteAll.addEventListener("click", function(event){
//       event.preventDefault();
//       deleteAllTask(event);
//     });

//     //append the delete button to the newTask div
//     taskListHolding.appendChild(deleteAll);

//   }

// };

// //save tasks


// var saveTask = function(){
//   var taskInput = document.getElementById('newTask');
//   var newTask = taskInput.value;

//   //add new value to your array
//   taskArray.push(newTask);
//   updateTasks();
//   taskInput.value='';
//   console.log(taskArray);
//   console.log('hello');
// };

// //delete task
//   var deleteTask = function(e){
//   var taskNumber = e.target.parentElement.id;   
//   taskArray.splice(taskNumber, 1);
//   updateTasks();
// };

// //same as deleting each task, delete all tasks
// var deleteAllTask = function(e){

// //add a prompt to delete all items from list
//   var answer = prompt("Would you like to delete this list?");
//   if(answer === "sure" || answer === "Sure" || answer === "Yes" || answer === "yes" || answer === "Y" || answer ==="n" || answer === ""){
//   //splice changes the content of an array 
//   //you can add and/or remove elements in the array.
//   taskArray.splice(0, taskArray.length);
//   updateTasks();

//   };
// };

//init
var init = function() {
    //define "add" button
    var addButton = document.getElementById("addButton");

    //add event listener for click
    addButton.addEventListener('click', function(e) {

        e.preventDefault();
        saveTask();

    });
};

window.onload = init();
