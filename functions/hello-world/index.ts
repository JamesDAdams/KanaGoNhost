/*

- How to create a Serverless Function in TypeScript.

Test:

curl http://localhost:1337/v1/functions/hello-world
*/

import { Request, Response } from 'express'

export default (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  res.status(200).send('Hello world')
}
