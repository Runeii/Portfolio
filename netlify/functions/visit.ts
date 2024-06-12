import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';

const writeToSheet = async (data: any) => {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SHEET_EMAIL,
    key: process.env.GOOGLE_SHEET_KEY?.replace(/\\n/g, "\n"),
    scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file']
  });

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID ?? '', serviceAccountAuth);

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0]
  await sheet.addRow(data);
}

export default async (req: Request) => {
  const url = new URL(req.url);

  await writeToSheet({
    date: new Date(),
    ip: req.headers.get('cf-connecting-ip'),
    target: url.searchParams.get('target') ?? undefined,
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
