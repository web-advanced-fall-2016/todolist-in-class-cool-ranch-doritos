# JANE + AINE | Session 11 | in class exercise

### Features

- Load To Do List Suggestions from Database
- Add new items to the todo list.
- Remove existing items from the todo list.
- View all the existing items and descriptions when page loads as long as the server instance is running.

### Setup

1) Clone or download respository
2) Open Terminal: navigate to folder, enter -npm install
3) Once install complete: enter -npm start 
4) If Terminal says: 'Server running and listening at http://localhost:3000/' ---- Everything is running as expected

### Endpoints

| URL      | Descriptions                     | Response Structure | Method |
| -------- | -------------------------------- | ------------------ | ------ |
| `/tasks` | returns all the available tasks  |                    | GET    |
| `/tasks` | adds a new item to the task list |                    | POST   |
|          |                                  |                    |        |

response structure of `/tasks` (GET)

```json
{
  message: 'success'
  data: [
    {
      desciption: 'clean you room!',
  		id: 1234
    },
	{
            desciption: 'clean you room!',
  		id: 1234
	},
	...
  ]
}
```

response structure of '/tasks' (POST)

```json
{
  message: 'success',
  data: {
    description: 'do your assignment!',
    id: 1235
  }
}
```

### Getting Started

1) Open http://localhost:3000 in a browser window
2) The pre-loaded items should appear on the list
3) To add your own items to the todo list, enter the item into the textbox and hit the 'ADD' button when you are done
4) Once you have added an item to the todo list, refresh the website to see the updated list
5) To remove an item hit the 'X' next to that item

### Resources

To create this ToDo List we utilized the jquery library. We also referenced the styling and web framework from a previous MFADT bootcamp class project. 




