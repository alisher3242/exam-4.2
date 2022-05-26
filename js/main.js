let fullName = document.querySelector(".fio")
let group = document.querySelector(".gr")
let jinsi = document.querySelector(".jins")
let isDone = document.querySelector(".yoq")
let formik = document.querySelector(".formik")
let template = document.querySelector("#template")
let storage = window.localStorage
let getUserrrs = storage.getItem("keys")
let render = (data, tbody) => {
    data.forEach(element => {
        let newTemp = template.content.cloneNode(true)
        newTemp.querySelector(".fullname").textContent = element.fio
        newTemp.querySelector(".group").textContent = element.group
        newTemp.querySelector(".jinsi").textContent = element.jinsi
        newTemp.querySelector(".xa").textContent = element.done
        tbody.append(newTemp)
    });
}
let data = []

if (getUserrrs) {
    data = JSON.parse(getUserrrs)
} else {
    data = []
}
render(data, tbody)

formik.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let users = {
        fio: fullName.value,
        group: group.value,
        jinsi: jinsi.value,
        done: isDone.value
    }

    data.push(users)

    render(data, tbody)
    storage.setItem("keys", JSON.stringify(data))
})