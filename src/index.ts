import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import routes from "./routes";
import { createWriteStream } from "fs";
import helmet from "helmet";

export const app: Express = express();

// Console logging.
app.use(morgan("common"));
// File logging.
app.use(morgan("common", {
	stream: createWriteStream("./logs/access.log", { flags: "a" })
}));

// Request parsing.
app.use(express.urlencoded({ extended: false }));
// JSON handling.
app.use(express.json());

// ===================== API RULES =====================
app.use((req, res, next) =>
{
	// CORS policy
	res.header("Access-Control-Allow-Origin", "*");
	// CORS headers
	res.header("Access-Control-Allow-Headers", "origin, X-Requested-With,Content-Type,Accept, Authorization");
	// CORS method headers
	if (req.method === "OPTIONS")
	{
		res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
		return res.status(200).json({});
	}
	next();
});

// Extra security.
app.use(helmet());

// Routes.
app.use("/", routes);

// For production deployments with nginx so we always get the correct req.ip
app.set("trust proxy", true);

// Error handling.
app.use((req, res, next) =>
{
	const error = new Error("Not Found");
	return res.status(404).json({
		error: 404,
		message: error.message
	});
});

// Showtime! Start the server.
const httpServer = http.createServer(app);
const PORT = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
