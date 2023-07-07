import { Router } from "express";
const router: Router = Router();

router.get("/user", (req, res) => {
  res.send("user info");
});

export default router;
