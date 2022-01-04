import mysql from "mysql";
import { database } from "../config.json";

/**
 * Our database class, for handling connections and queries.
 */
export default class Database
{
	private static _instance: Database;

	connection: mysql.Connection;
	connected = false;

	constructor()
	{
		this.connection = mysql.createConnection({
			host: database.host,
			user: database.user,
			password: database.password,
			database: database.targetDb
		});

		this.connect();
	}

	public static get instance()
	{
		return this._instance || (this._instance = new this());
	}

	/**
	 * Run a query to the database.
	 * @param query The query string.
	 * @param callback Callback.
	 */
	public static query(query: string, callback: Function)
	{
		this.instance.connection.query(query, (err: Error, results: Object[], fields: []) =>
		{

			if (err)
			{
				callback(err);
			}
			else if (results.length === 0)
			{
				callback(null, 0);
			}
			else
			{
				callback(null, results);
			}
		});
	}

	/**
	 * Escape any user-given data.
	 * @param id The content to escape.
	 * @returns The clean string.
	 */
	public static escape(id: unknown)
	{
		return this.instance.connection.escape(id);
	}

	private connect()
	{
		this.connection.connect((err: mysql.MysqlError) =>
		{
			if (err)
			{
				console.log(err.message);
				return;
			}
			this.connected = true;
			console.log("MySQL Connection established!");
		});
	}
}
