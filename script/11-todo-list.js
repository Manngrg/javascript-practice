
/* steps
1.create array to store to do 
2.when clicked add, get text from text box and add it to array
*/



const toDoList = [];
function addToDo (){
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;
    

    toDoList.push(name);
    console.log(toDoList);

    inputElement.value = '';
}

// to get the text in the text box we use document.queryselector. for that we use a class.