document.addEventListener("DOMContentLoaded", () =>{
    getCar()
    showAllVehicles()
})

const getCar = () => {
    fetch('https://swapi.dev/api/vehicles/')
    .then(res => res.json())
    .then(data => data.forEach(renderVehicleList))
    console.log('fetch fetched')
}

//Button function to call all vehicles
const showAllVehicles = () => {
    const bttn = document.getElementById('car-list')
    bttn.addEventListener("click", (e) => {
        e.preventDefault()
        console.log('test')
    })
}

//render function to an li
const renderVehicleList = () => {
    let li = document.querySelector('ul').createElement('li')
    li.append("test")
}