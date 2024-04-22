import { getStore } from "@netlify/blobs";

export default async (req: Request) => {
  const promptsStore = getStore('visits');
  const url = new URL(req.url);

  const date = new Date()
  await promptsStore.setJSON(date.toUTCString(), {
    visitor_id: url.searchParams.get('id'),
    path: url.searchParams.get('path'),
    action: url.searchParams.get('type'),
    ip: req.headers.get('cf-connecting-ip'),
    country: req.headers.get('cf-ipcountry')
  });

  return new Response();
};
