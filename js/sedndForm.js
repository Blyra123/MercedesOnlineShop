const form = document.querySelector('.form-test-drive')
form.addEventListener('submit', (event) =>{
    event.preventDefault()
    let data = {}
    for (let {name, value} of form.element) {
        if (name) {
            data[name] = value
        }
    }
    fetch('https://jsonplaceholer.typicode.com/photos',{
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status ===200 || response.status === 201) {
            return response.json()
        } else {
            throw new Error(response.status)
        }
    })
    .then(data => {
        alert('Данные успешно сохранены')
        form.reset()
    })
    .catch (error =>{
        alert('Поизошла ошибка' + error.message)
    })
})