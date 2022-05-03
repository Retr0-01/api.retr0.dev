module.exports =
{
	apps :
	[{
		name: "api.spaceretr0.com",
		script: "./build/index.js",
		wait_ready: true,
		watch: true,
		ignore_watch: [".vscode", ".github", "logs", "node_modules", "build", "db", "docs", "src"],
		log_date_format: "DD-MM-YYYY HH:mm Z",
		error_file: "./logs/error.log",
		out_file: "./logs/output.log"
	}]
};
