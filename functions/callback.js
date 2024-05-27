export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessCode = String(context.query.code)

  const payload = new URLSearchParams()

  payload.append('client_id', process.env.1244629352801636462)
  payload.append('client_secret', process.env.MfFMIf_g_MstlUXrBlyTv0Vh3UgmTt4E)
  payload.append('grant_type', 'authorization_code')
  payload.append('redirect_uri', process.env.https://olivrr-ont.github.io/discord-oauth2-redirect/)
  payload.append('code', accessCode)
  payload.append('scope', 'bot')
  
  const authRes = await fetch('https://discord.com/api/v8/oauth2/token', {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}
