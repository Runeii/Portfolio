import { getStore } from "@netlify/blobs";

export default async (req: Request) => {
  const promptsStore = getStore('visits');
  const url = new URL(req.url);

  const ip = req.headers.get('cf-connecting-ip');
  if (ip === '2a02:a210:20ba:d500::1005' || ip === '62.163.118.12') {
    return new Response();
  }
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
