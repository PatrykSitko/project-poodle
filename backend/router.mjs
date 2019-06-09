import express from "express";
//@ts-ignore
import db from "./db.json";
const router = express.Router();
router.post("/login", (req, res) => {
  let wrongPassword = false;
  let sessionToken = undefined;
  let sessionUrl = undefined;
  db.forEach(({ userName, password, token, url }) => {
    if (userName === req.body.userName && password === req.body.password) {
      res.status(200);
      sessionToken = token;
      sessionUrl = url;
    } else if (userName !== req.body.userName && !wrongPassword) {
      res.statusMessage =
        "We could not find you in our database... contact your teacher";
    } else {
      wrongPassword = true;
      res.statusMessage = "Wrong Password, try to recover";
    }
  });
  console.log(sessionToken, sessionUrl);
  if (sessionToken && sessionUrl)
    res.json({ token: sessionToken, url: sessionUrl });
  else res.sendStatus(203);
});
router.post("/student/:userName", (req, res) => {
  console.log(req.params);
  let response = undefined;
  db.forEach(({ userName, password, token, ...other }) => {
    if (userName === req.params.userName && req.body.token === token) {
      response = { ...other };
    }
  });
  console.log(response);
  if (response) res.json(response);
  else res.sendStatus(403);
});

export default router;
