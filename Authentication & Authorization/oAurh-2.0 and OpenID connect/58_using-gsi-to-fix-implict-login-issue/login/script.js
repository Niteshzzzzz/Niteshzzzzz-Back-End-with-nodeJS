const clientId =
  "708565128148-kfe4aneo75f3gcb8qbioga46l39rp0d0.apps.googleusercontent.com";

window.onload = function () {
  google.accounts.id.initialize({
    client_id: clientId,
    callback: async (response) => {
      console.log(response);
      if (response.credential) {
        await loginUserWithIdToken(response.credential);
      } else {
        console.log("Something went wrong!");
      }
    },
  });

  google.accounts.id.renderButton(document.getElementById("google-login"), {
    theme: "filled_blue",
    shape: "pill",
  });
  google.accounts.id.prompt();
};

async function loginUserWithIdToken(idToken) {
  const baseURL = "http://localhost:4000";
  const response = await fetch(`${baseURL}/auth/google`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idToken }),
  });

  if (response.status === 200) {
    location.href = "/";
  }
}

// function loginUserWithIdToken(response) {
//   console.log(response)
// }

