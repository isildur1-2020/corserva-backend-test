import "./database/init";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express, {
  Express,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import routerVersions from "./routers";
import { config } from "./config/environment";

const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routerVersions);

app.use(((err, req: Request, res: Response, next: NextFunction) => {
  console.log("Uncaught Error", err.message);
  res.send("Something went wrong");
}) as ErrorRequestHandler);

app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
