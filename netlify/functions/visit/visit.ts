import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event, context) => {
  await fetch(`https://maker.ifttt.com/trigger/portfolio_visited/json/with/key/${process.env.IFTTT_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      visitor_id: event.queryStringParameters?.id,
      path: event.queryStringParameters?.path,
      action: event.queryStringParameters?.type,
      ip: event.headers['cf-connecting-ip'],
      country: event.headers['cf-ipcountry']
    })
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      ok: true,
      details: {
        visitor_id: event.queryStringParameters?.id,
        path: event.queryStringParameters?.path,
        action: event.queryStringParameters?.type,
        ip: event.headers['cf-connecting-ip'],
        country: event.headers['cf-ipcountry']
      }
    })
  }
}
