function addTask(){
    const hoje = new Date()
    let indiceID = 0
    let section = document.getElementById("tasks")
    let taskInput = document.getElementById("taskValue")
    let task = taskInput.value

   if(task == ""){
    window.alert("Insira uma tarefa para adiciona-la na lista")
   } else{
    //criando lista e propiedades:
    let ul = document.createElement("ul")
    ul.id = "list"
    //criando itens e propiedades:
    let li = document.createElement("li")
    li.id = indiceID
    li.className = "item"
    li.innerText = task

    //iterar o indice:
    indiceID ++ 
    
    //limpar o input:
    taskInput.value = ""
    taskInput.focus()

    //criando o botão para remover a tarefa:
    let buttonRemove = document.createElement("button")
    buttonRemove.id = "btn-remove"
    buttonRemove.className = "btn-remove"
    buttonRemove.innerText = "check"
    buttonRemove.addEventListener("click", function(){
        ul.removeChild(li)
        ul.removeChild(row)
        let checked = document.getElementById('sidebar')
        //lista das tarefas concluidas
        let ulConcluided = document.createElement("ul")
        ulConcluided.id = "taskConcluided"
        ulConcluided.className = "taskConcluided"
        //
        let liConcluided = document.createElement("li")
        liConcluided.id = 'itemConcluided'
        liConcluided.className = "itemConcluided"
        liConcluided.innerText = `${hoje.getHours()}:${hoje.getMinutes()} - ${task}`
        //
        ulConcluided.appendChild(liConcluided)
        checked.appendChild(ulConcluided)

    }) 

    let row = document.createElement("br")

    li.appendChild(buttonRemove)
    ul.append(li, row)
    section.appendChild(ul)   
}
}