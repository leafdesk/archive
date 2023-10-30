export default function handler(req, res) {
  /**
   * API 내장 Middleware. req.query, req.cookies 등.
   */
  const { uid } = req.query;

  /**
   * Application > Cookies > { "name" : "value" } 추가.
   */
  const cookies = req.cookies;

  /**
   * res.status(code)
   *
   * res.json(body): serializable object
   */
  res.status(200).json({ name: `Jimmi ${uid} ${JSON.stringify(cookies)}` });

  /**
   * res.send(body): string / object / Buffer
   */
  // res.status(500).send({ error: 'error' });

  /**
   * res.redirect(code, url)
   */
  // res.redirect(307, '/api/user');
}
