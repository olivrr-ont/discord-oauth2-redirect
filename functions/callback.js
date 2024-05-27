const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const code = event.queryStringParameters.code;
    const CLIENT_ID = 'your_client_id';
    const CLIENT_SECRET = 'your_client_secret';
    const REDIRECT_URI = 'https://yourusername.github.io/your-repository-name';

    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
        })
    });

    const tokenData = await tokenResponse.json();

    return {
        statusCode: 200,
        body: JSON.stringify(tokenData),
    };
};
