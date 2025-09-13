import {OAuth2Client} from 'google-auth-library'

const token = '----'

const clientId =
  "";

const client = new OAuth2Client()

const data = await client.verifyIdToken({
    idToken: token,
    audience: clientId
})

console.log(data.getPayload())