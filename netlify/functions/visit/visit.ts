import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  console.log(event)
  fetch(`https://maker.ifttt.com/trigger/portfolio_visited/json/with/key/${process.env.IFTTT_KEY}`, {
    method: 'POST',
    body: JSON.stringify({ ...event.queryStringParameters, ip: event.headers['client-ip'] })
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, details: event })
  }
}
