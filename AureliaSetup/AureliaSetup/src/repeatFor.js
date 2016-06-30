export class repeatFor{
    
    constructor(){
        this.headerOfPage='Repeat binding Example';
        //Creating Array
        this.todos = new Array();
        //Assiigning default Arry with TodoItems modal
        this.todos.push(new ToDoItems("Please Check to complete", false));
        //By default input value assigining null
        this.newTodoText ='';
    }

    //On click of delete remove perticular item
    removeTodo(ToDoItems){
        this.todos.splice(this.todos.indexOf(ToDoItems), 1)
    }

    //On enter of input field after type something will trigger addTodo() 
    doneTyping(event){
        if (event.which === 13) {
            this.addTodo();
        }
    }

    //On click  of addToDo button push the arry with enterd value
    addTodo() {
        this.todos.push(new ToDoItems(this.newTodoText, false));
        this.newTodoText = '';
    }

    //general check box click event.
    completeAll(){
        for (var i = 0, a = this.todos; i < a.length; i++) {
            var todolist = a[i];
            todolist.completed = true;
        }
    }

    
}


export class ToDoItems {
    constructor(text, completed) {
        this.text = text;
        this.completed = completed;
    }
}


