function addTarefa() {
    let ValorDoInput = document.querySelector("input").value

    if (ValorDoInput == "") {
        alert("erro insira um texto")
        return
    }

    let li = document.createElement("li")

    li.innerHTML = ValorDoInput + "<span onclick='deletList(this)'>❌</span>"

    document.querySelector("#taskList").appendChild(li)

    document.querySelector("input").value = ""
}

function deletList(li) {
    li.parentElement.remove()   
}