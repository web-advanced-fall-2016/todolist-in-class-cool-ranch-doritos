(function() {
    let list = document.getElementById('taskList');
    let baseURL = "http://localhost:3000";
    var i = 0;


    // load existing data

    let updateTasks = function() {
        $.ajax({
            url: baseURL + '/tasks',
            method: "GET"
        }).done(function(response) {
            console.log('response working');
            console.log(response);

            for (item of response.data) {

                //create element
                let newItem = document.createElement('div');
                newItem.className = 'task';

                list.appendChild(newItem);

                let task = document.createElement('p');


                task.innerHTML = item.description;
                console.log(item.description);

                //create the delete button
                let deleteButton = document.createElement('button');
                //set the delete button ID to deleteButton
                deleteButton.id = 'deleteButton';
                //add a value to our button
                deleteButton.innerText = 'X';
                deleteButton.addEventListener('click', function (e) {
                    e.preventDefault();
                    console.log('are we done');
                    deleteTask(e, id);
                    // input type="button"
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

    function saveTask() {
        let taskInput = document.getElementById("newTask");
        let todo = taskInput.value;

        if (todo) {
            newTodo = { description:todo };
             $.ajax({
                type: "POST",
                url: baseURL + '/tasks',
                data: newTodo
            })
            .done(function(response){
                if( response.message == 'success') {        
                    console.log(response);

    let newItem = document.createElement('div');
                newItem.className = 'task';

                list.appendChild(newItem);

                let task = document.createElement('p');


                task.innerHTML = response.data.description;

                //create the delete button
                let deleteButton = document.createElement('button');
                //set the delete button ID to deleteButton
                deleteButton.id = 'deleteButton';
                //add a value to our button
                deleteButton.innerText = 'X';
                deleteButton.addEventListener('click', function (e) {
                    e.preventDefault();
                    console.log('are we done');
                    deleteTask(e, id);
                    // input type="button"
                });

                //append the task to the taskdiv
                newItem.appendChild(task);

                //append the delete button to the newTask div
                newItem.appendChild(deleteButton);

                myList.appendChild(list);

                    // add new item to the DOM with response.data.description
                    // and id =  response.data.id
                }else {
                    console.log('Something went wrong!!');
                }
            });

        }

        taskInput.value = "";

    };

    //delete task
    // let deleteTask = function(e) {

    //     // $.ajax({
    //     // type:"DELETE",
    //     // url: url + `/todos`,
    //     // data: {"id":id},
    //     //  }).done(function(res){

    //     console.log('DELETE');
    //     var taskNumber = e.target.parentNode;
    //     taskNumber.remove();
    //     // db.tasks.splice(task, 1);
    //     console.log('removing a Task number ' + taskNumber.id);
    // // };
    // };

//      let deleteTask = function(e) {
//             $.ajax({
//             type: "Delete",
//             url: baseURL + '/tasks',
//             data: e, id,
//             success: function(result) {
//              console.log("deleted")   
//             }
            
//         })
// };

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
