import Database from "./Database";
import Encryption from "./Encryption";

/**
 * Authentication Class - For controlling API authentication using API keys.
 */
export default class Auth
{
	/**
	 * Add a new API key to the database.
	 * @param apiKey The API key to add.
	 * @param comment An optional comment for this key.
	 * @returns The hashed key added.
	 */
	public static AddNewAPIKey(apiKey: string, comment?: string): void
	{
		const hashedKey = Encryption.generateHash(apiKey, (err: Error, hash: string) =>
		{
			if (err) return console.error(err);
			else return hash;
		});

		const query = `INSERT INTO api_keys (hashedKey, comment, created) VALUES (${hashedKey}, ${comment}, now())`;

		Database.query(query, (err: Error, results: Object[]) =>
		{
			if (err)
			{
				return console.error(err);
			}
			else
			{
				console.log("Key successfully added!");
			}
		});
	}

	// public static IsAuthed(apiKey: string): boolean
	// {
	// 	const query = "SELECT * FROM api_keys";
	// 	Database.query(query, (err: Error, results: Object[]) => {
	// 		if (err) {
	// 			return console.error(err);
	// 		}
	// 		else {
	// 			results.forEach(key: APIKey => {
	// 				Encryption.compareAgainstHash(apiKey, key.apikey, (err: Error, hash: string) => {
	// 					if (err) return console.error(err);
	// 					else return hash;
	// 				});
	// 			}
	// 	});
	// }
}
