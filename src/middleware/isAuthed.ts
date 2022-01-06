import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import Database from "../classes/Database";
import APIKey from "../types/APIKey";

/**
 * Use this middleware to protect an endpoint.
 */
const isAuthed = async (req: Request, res: Response, next: NextFunction) =>
{
	const providedKey = Database.escape(req.query.key);
	const query = "SELECT * FROM api_keys";

	Database.query(query, (err: Error, results: APIKey[]) =>
	{
		if (err)
		{
			res.status(400).json({
				message: "ERROR",
				error: err,
			});
		}
		else
		{
			for (const apiKey of results)
			{
				bcrypt.compare(providedKey, apiKey.hashedKey, (err, isMatch) =>
				{
					if (err) return console.error(err);

					if (isMatch) return next();

					return res.status(401).json({
						message: "ERROR",
						error: "ERROR_INVALID_API_KEY",
					});
				});
			}
		}
	});
};

export default { isAuthed };
