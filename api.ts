import express, {Router} from "express";
import serverless from "serverless-http";


const api = express();
// const port = 5000;

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);


export const handler = serverless(api);

// api.get(`/`, (req, res) => {
//   res.send("hello world");
// });

// api.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
