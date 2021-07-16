import express, { Request, Response } from 'express'
import next from 'next'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // server.all('*', (req: Request, res: Response) => {
  //   handle(req, res)
  // })

  server.get('/api', (req: Request, res: Response) => {
    res.json({ status: 'okay' })
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
