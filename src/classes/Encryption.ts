import bcrypt from "bcrypt";

/**
 * Various hashing methods.
 */
export default class Encryption
{
	public static generateHash = async (plainText: string, callback: Function) =>
	{
		const salt = await bcrypt.genSalt(10);
		bcrypt.hash(plainText, salt, (err, hash) =>
		{
			if (err) return callback(err);

			return callback(null, hash);
		});
	};

	public static compareAgainstHash = (plainText: string, hash: string, callback: Function) =>
	{
		bcrypt.compare(plainText, hash, (err, isPasswordMatch) =>
		{
			if (err) return callback(err);

			callback(null, isPasswordMatch);
		});
	};

}
