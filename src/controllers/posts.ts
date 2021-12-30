import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

// Get all posts from the database.
const getPosts = async (req: Request, res: Response, next: NextFunction) =>
{
	const result: AxiosResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
	const posts: [Post] = result.data;

	return res.status(200).json({
		message: posts
	});
};

// Get a single post.
const getPost = async (req: Request, res: Response, next: NextFunction) =>
{
	const id: string = req.params.id;

	const result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post: Post = result.data;

	return res.status(200).json({
		message: post
	});
};

// Update a single post.
const updatePost = async (req: Request, res: Response, next: NextFunction) =>
{
	const id: string = req.params.id;
	const title: string = req.body.title ?? null;
	const body: string = req.body.body ?? null;

	const response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		...(title && { title }),
		...(body && { body })
	});

	return res.status(200).json({
		message: response.data
	});
};

// Delete a single post.
const deletePost = async (req: Request, res: Response, next: NextFunction) =>
{
	const id: string = req.params.id;
	await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

	return res.status(200).json({
		message: "post deleted successfully"
	});
};

// Create a new post.
const addPost = async (req: Request, res: Response, next: NextFunction) =>
{
	const title: string = req.body.title;
	const body: string = req.body.body;

	const response: AxiosResponse = await axios.post("https://jsonplaceholder.typicode.com/posts", {
		title,
		body
	});

	return res.status(200).json({
		message: response.data
	});
};

export default { getPosts, getPost, updatePost, deletePost, addPost };
