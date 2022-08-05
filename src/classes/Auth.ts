import Database from "./Database";
import APIKey from "../types/APIKey";
import bcrypt from "bcrypt";

/**
 * Authentication Class - For controlling API authentication using API keys.
 */
export default class Auth
{
	/**
	 * Add a new API key to the database.
	 * @param plainText The API key to add.
	 * @param comment An optional comment for this key.
	 */
	public static AddNewAPIKey(plainText: string, comment?: string)
	{
		const cleanText = Database.escape(plainText);
		const cleanComment = Database.escape(comment);

		bcrypt.hash(cleanText, 10, (err, hash) =>
		{
			if (err) return err;

			const query = `INSERT INTO api_keys (hashedKey, comment, created) VALUES ('${hash}', ${cleanComment}, now())`;

			Database.query(query, (err: Error, results: APIKey[]) =>
			{
				if (err) return console.error(err);
				else console.log("Key successfully added!");
			});
		});
	}
}
