import { Request, Response, NextFunction } from "express";
import listEndpoints from "express-list-endpoints";
import { app } from "../server";

const getAllRoutes = async (req: Request, res: Response, next: NextFunction) =>
{
	res.json({
		routes: listEndpoints(app)
	});
};

export default { getAllRoutes };
