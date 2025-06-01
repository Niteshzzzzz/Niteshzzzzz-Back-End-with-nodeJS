const form = document.querySelector('form')
const p = document.querySelector('p')
const base_url = 'http://localhost:4000/'

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const xhr = new XMLHttpRequest()
      xhr.open("POST", `${base_url}`, true)
    //   xhr.setRequestHeader('filename', file.name)
      xhr.addEventListener('load', (e) => {
        console.log(xhr.response)
      })
      xhr.upload.addEventListener('progress', (e) => {
        let uploaded = (e.loaded / e.total) * 100;
        p.innerHTML = `Progress: ${uploaded.toFixed(2)}%`
      })
      xhr.send(formData)
})