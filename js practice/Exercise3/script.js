

document.getElementById("Submit")


submit.addEventListener("click", (e) => {
    e.preventDefault()
    let Titlec = Title.value
    let Descc = Desc.value
    localStorage.setItem("todo", JSON.stringify([Titlec,Descc]));
    todo.innerHTML =`
     <h1><b>${Titlec}</h1> 
     <p>${Descc}</p> 
     `
})

document.getElementById("delete")

deleteed.addEventListener("click", (e) => {
  e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML =""
})