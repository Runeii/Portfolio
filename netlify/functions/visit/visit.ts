import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  // Korean handily uses YY/MM//DD
  const time = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(Date.now());

  console.log("Visit::", { ...event.queryStringParameters, ip: event.headers['client-ip'], time });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, details: event })
  }
}
