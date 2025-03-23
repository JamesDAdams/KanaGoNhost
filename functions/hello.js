export default (req, res) => {
  console.log('Headers:', req.headers)
  console.log('Auth:', req.auth.getAccessToken())
  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  const user = req.auth
  console.log(user)

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  res.status(200).send(`Hello ${user.displayName || user.id}!`)
}
