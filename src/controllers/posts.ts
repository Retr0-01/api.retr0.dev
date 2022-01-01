import { Request, Response, NextFunction } from "express";
import Database from "../mysql";

// Get all posts from the database (well, almost all posts lol).
const getPosts = async (req: Request, res: Response, next: NextFunction) =>
{
	const query = "SELECT * FROM blog_posts LIMIT 100";
	Database.query(query, (err: Error, results: Object[]) =>
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
			res.json({
				message: "SUCCESS",
				response: results
			});
		}
	});
};

// Get a single post.
const getPost = async (req: Request, res: Response, next: NextFunction) =>
{
	const id = Database.escape(req.params.id);
	const query = `SELECT * FROM blog_posts WHERE id = ${id}`;

	Database.query(query, (err: Error, results: Object[]) =>
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
			res.json({
				message: "SUCCESS",
				response: results
			});
		}
	});
};

// Update a single post.
const updatePost = async (req: Request, res: Response, next: NextFunction) =>
{
	const id = Database.escape(req.params.id);
	const title = Database.escape(req.body.title) ?? null;
	const body = Database.escape(req.body.body) ?? null;
	const query = `UPDATE blog_posts SET title = ${title}, body = ${body} WHERE id = ${id}`;

	Database.query(query, (err: Error, results: Object[]) =>
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
			res.json({
				message: "SUCCESS",
				response: results
			});
		}
	});
};

// Delete a single post.
const deletePost = async (req: Request, res: Response, next: NextFunction) =>
{
	const id = Database.escape(req.params.id);
	const query = `DELETE FROM blog_posts WHERE id = ${id}`;

	Database.query(query, (err: Error, results: Object[]) =>
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
			res.json({
				message: "SUCCESS",
				response: results
			});
		}
	});
};

// Create a new post.
const addPost = async (req: Request, res: Response, next: NextFunction) =>
{
	const title = Database.escape(req.body.title) ?? null;
	const body = Database.escape(req.body.body) ?? null;
	const query = `INSERT INTO blog_posts (title, body, created) VALUES (${title}, ${body}, now())`;

	Database.query(query, (err: Error, results: Object[]) =>
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
			res.json({
				message: "SUCCESS",
				response: results
			});
		}
	});
};

export default { getPosts, getPost, updatePost, deletePost, addPost };
