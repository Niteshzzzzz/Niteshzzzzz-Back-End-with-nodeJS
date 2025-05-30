// const response = await fetch('http://192.168.217.97:4000/')

// console.log(response.headers)

// for await (const chunk of response.body) {
//     console.log(chunk)
// }


// response.headers.forEach((value, key) => {
//     console.log(key, ': ', value)
// })

fetch('https://reqres.in/api/login', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'eve.holt@reqres.in', password: 'cityslicka' }) 
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));