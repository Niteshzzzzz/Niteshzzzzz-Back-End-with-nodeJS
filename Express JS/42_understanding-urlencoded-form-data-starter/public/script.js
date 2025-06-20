const form = document.querySelector("form");
const nameInput = document.querySelector('[name="user"]');
const emailInput = document.querySelector('[name="email"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;

  const response = await fetch("http://localhost:4000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });

  const data = await response.json();
  console.log(data);
});
