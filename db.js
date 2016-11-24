let tasks = require('./todolist.json');
let fs = require('fs');


let db = {
	getList: function(){
		let things = tasks.slice(0);
	return things;
},
    getTask: (id) => {
        for (let task of tasks) {
            if (task.id == id) {
                // cloning and returning the task
                return Object.assign({}, task);
                console.log("work work work work work");
            }
        }
        return false;
    },

    addTask: (task) => {
        task.id = tasks.length;
        tasks.push(task); //push the changes back to json file
        db.updateList();//update
    },
    updateList: () => {
        fs.writeFile('./todolist.json', JSON.stringify(newTask), (err) => {
            if (err)
                console.log('File not updated');
            console.log('File updated!');
        });
    }
};



module.exports = db;
