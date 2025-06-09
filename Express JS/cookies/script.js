const response = await fetch('http://localhost:4000/', {
    method: 'GET',
    credentials: 'include'
})

const data = await response.text()

console.log(data)

// const xhr = new XMLHttpRequest()

// xhr.open('GET', 'http://localhost:4000/', true)

// xhr.withCredentials = true

// xhr.send()


