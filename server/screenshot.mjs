import captureWebsite from 'capture-website';
import express from 'express';

const app = express()
const port = 3000

app.get('/screenshot', async (req, res) => {
	const { url, width, height } = req.query;
	const buffer = await captureWebsite.buffer(url, {
		width: parseInt(width),
		height: parseInt(height),
		fullPage: true
	})
	res.setHeader("Content-Type", "image/png")
	res.setHeader("Content-Length", buffer.length,)
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
	res.send(buffer);
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

