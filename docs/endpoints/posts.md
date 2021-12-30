# ``posts`` endpoint
This endpoint manages the blog posts being shown on the website.

- [``posts`` endpoint](#posts-endpoint)
	- [Supported Methods](#supported-methods)
	- [GET ``/posts``](#get-posts)
	- [POST ``/posts``](#post-posts)
	- [GET ``/posts/:id``](#get-postsid)
	- [PUT ``/posts/:id``](#put-postsid)
	- [DELETE ``/posts/:id``](#delete-postsid)

## Supported Methods
| Method | Supported          |
| ------ | ------------------ |
| GET    | :heavy_check_mark: |
| POST   | :heavy_check_mark: |
| PUT    | :heavy_check_mark: |
| PATCH  | :x:                |
| DELETE | :heavy_check_mark: |

## GET ``/posts``
Get all posts from the database.

--------------------
## POST ``/posts``
Create a new post.  

| Field | Description                     | Required           |
| ----- | ------------------------------- | ------------------ |
| title | The title of the blog post      | :heavy_check_mark: |
| body  | The text the blog post contains | :heavy_check_mark: |

Example request:  
``POST https://api.website.com/posts``  
Request Body: ``raw``/``json``
```json
{
    "title": "New Post",
    "body": "New post body"
}
```

--------------------
## GET ``/posts/:id``
Get a single post from the database with the respective ``id``.

--------------------
## PUT ``/posts/:id``
Update a single post's title and/or text.  

| Field | Description                     | Required           |
| ----- | ------------------------------- | ------------------ |
| title | The updated title     | :heavy_check_mark: |
| body  | The updated text | :heavy_check_mark: |

Example request:  
``PUT https://api.website.com/posts/1``  
Request Body: ``raw``/``json``
```json
{
    "title": "Updated Post",
    "body": "Updated post body"
}
```

--------------------
## DELETE ``/posts/:id``
Delete the post matching the ``id``.  
Example request:  
``DELETE https://api.website.com/posts/1``  
