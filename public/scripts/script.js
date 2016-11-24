(function() {
    let list = document.getElementById('taskList');
    let baseURL = "http://localhost:3000";
    let taskArray = [];
    var i = 0;

    //load existing data

    let updateTasks = function() {
        $.ajax({
            url: baseURL + '/tasks',
            method: "GET"
        }).done(function(response) {
            console.log('response working');

            for (let i = 0; i < response.length; i++) {
                let count = i;
                console.log(response);
                console.log(response.length);

                //create element
                let newItem = document.createElement('div');
                newItem.className = 'task';

                list.appendChild(newItem);

                let task = document.createElement('p');


                task.innerHTML = response[i].description;

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
                newItem.appendChild(task);

                //append the delete button to the newTask div
                newItem.appendChild(deleteButton);

                myList.appendChild(list);
            }
        });
    };

    updateTasks();



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
                    throw new Error('Something went wrong!');
            })
            .then(function(res) {
                console.log(res.length);

                saveTask();
                deleteTask();
            })
            .catch(function(err) {
                console.warn(`Couldn't fetch list`);
                console.log("err");
            });
    };

    function saveTask() {
        let taskInput = document.getElementById("newTask");
        let todo = taskInput.value;

        if (todo) {
            newTodo = { description: todo, id: i };
            sendTask(newTodo);

        }
        let newItem = document.createElement('div');
        newItem.classList.add('task');
        console.log(todo);

        newTodo.id = i++;

        taskArray.push(todo);
        // updateTasks(newTodo);

        taskInput.value = "";

    };

    //delete task
    let deleteTask = function(e) {

        // $.ajax({
        // type:"DELETE",
        // url: url + `/todos`,
        // data: {"id":id},
        //  }).done(function(res){

        console.log('DELETE');
        var taskNumber = e.target.parentNode;
        taskNumber.remove();
        // db.tasks.splice(taskNumber, 1);
        console.log('removing a Task number ' + taskNumber.id);
    // };
    };


    let init = function() {
        //define "add" button
        let addButton = document.getElementById("addButton");

        //add event listener for add button
        addButton.addEventListener('click', function(e) {
            console.log(taskArray);
            e.preventDefault();
            saveTask();

        });
    };
    init();

})();
