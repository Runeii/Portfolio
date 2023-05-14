import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const { path } = event.queryStringParameters ?? {}

  console.log("Visit::", { ip: event.headers['client-ip'], path, time: Date.now() });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, details: event })
  }
}
