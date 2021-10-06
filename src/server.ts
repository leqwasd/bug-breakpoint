
import express from "express";
import { Router, NextFunction, Request, Response } from "express";

const PORT = 3000;

const app = express();

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction): void => {
    try {
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
})

app.use("/", router);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}...`);
});