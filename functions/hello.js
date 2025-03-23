import jwt from 'jsonwebtoken'

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  const authHeader = req.headers.authorization
  const token = authHeader?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'No token' })
  }

  try {
    const decoded = jwt.decode(token) // attention : decode ≠ verify
    const user = decoded

    res.status(200).send(`Hello ${user['sub'] || 'anonymous'}!`)
  } catch (err) {
    console.error('JWT Decode Error:', err)
    return res.status(401).json({ error: 'Invalid token' })
  }
}
