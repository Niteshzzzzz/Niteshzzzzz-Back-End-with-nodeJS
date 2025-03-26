fetch('http://localhost:3000/', {
    method: 'POST',
    body: 'Nitesh Kumar'
})
    .then(res => res.text())
    .then(data => console.log(data))