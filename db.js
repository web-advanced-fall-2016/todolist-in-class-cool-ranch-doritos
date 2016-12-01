var tasks = require('./todolist.json');
var fs = require('fs');


var db = {
    getList: function(){
    var things = tasks.slice(0);
    return things;
},

    // deleteTask: (task) => {
    //     task.id = tasks.length;
    //     tasks.push(task); //push the changes back to json file
    //     db.updateList();//update
    // },

    saveList: () => {
        fs.writeFile('./todolist.json', JSON.stringify(tasks), (err) => {
            if (err) {
                console.log('File not updated');
        }

        else{
            console.log('File updated!');
            }
        });
    }
};



module.exports = db;
