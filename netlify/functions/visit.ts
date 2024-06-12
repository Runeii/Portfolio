import { GoogleSpreadsheet } from "google-spreadsheet"; // NOTE: Pinned to v3 to avoid unnecessary google-auth-library dependency

const writeToSheet = async (data: any) => {
  console.log('start');
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  console.log('connected');
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SHEET_EMAIL,
    private_key: process.env.GOOGLE_SHEET_KEY?.replace(/\\n/gm, "\n") ?? '',
  });

  console.log('auth');
  await doc.loadInfo();
  console.log('load');
  const sheet = doc.sheetsByIndex[0]
  await sheet.addRow(data);
}

export default async (req: Request) => {
  const url = new URL(req.url);

  await writeToSheet({
    date: new Date(),
    ip: req.headers.get('cf-connecting-ip'),
    path: url.searchParams.get('path') ?? '/',
    action: url.searchParams.get('type'),
    country: req.headers.get('cf-ipcountry'),
    type: url.searchParams.get('type'),
  })

  return new Response(JSON.stringify(
    {
      statusCode: 200,
      body: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      headers: { "content-type": "image/gif" },
      isBase64Encoded: true,
    }
  ));
};
