const button = document.querySelector("button");
const baseURL = "http://localhost:4000";

button.addEventListener("click", () => {
  window.open(
    `${baseURL}/auth/google`,
    "auth-popup",
    "width=500,height=600"
  );
});

window.addEventListener("message", async ({ data }) => {
  // console.log(data)
  if (data.message === "success") {
    location.href = "/"
  }
  if(data.message === 'failure') {
    const p = document.createElement('p')
    p.innerHTML = 'something went wrong!'
    document.body.appendChild(p)
    setTimeout(() => {
      p.remove()
    }, 2000)
  }
});
