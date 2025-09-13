import { OAuth2Client } from 'google-auth-library'

const clientId =
  "";
const clientSecret = "";
const redirectUrl = "http://localhost:4000/auth/google/callback";


// setting google client 
const client = new OAuth2Client({
  clientId,
  clientSecret,
  redirectUri: redirectUrl
})

// geting tokens and verifying id_token
export async function fetchUserFromGoogle(code) {

  const { tokens } = await client.getToken(code)

  const data = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: clientId
  })

  const userData = data.getPayload()

  return userData;
}


export async function verifyIdToken(idToken) {

  const data = await client.verifyIdToken({
    idToken: idToken,
    audience: clientId
  })

  const userData = data.getPayload()

  return userData;
}


// generating googleAuthUrl
export function getGoogleAuthUrl() {
  return (client.generateAuthUrl({
    scope: ['email', 'profile', 'openid'],
    prompt: 'consent'
    // prompt: 'consent', 'none', 'select_user',
    // login_hint: 'nitesh@gmail.com'
  }))
}

