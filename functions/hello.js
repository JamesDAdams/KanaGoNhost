export default (req, res) => {
  const user = req.auth

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  res.status(200).send(`Hello ${user.displayName || user.id}!`)
}
