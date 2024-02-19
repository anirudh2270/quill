import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
	schema: "./app/db/schema/*",
	driver: "pg",
	out: "./drizzle",
	dbCredentials: {
		host: process.env.NEXT_PUBLIC_POSTGRESS_HOST!,
		port: Number(process.env.NEXT_PUBLIC_POSTGRESS_PORT),
		user: process.env.NEXT_PUBLIC_POSTGRESS_USERNAME,
		password: process.env.NEXT_PUBLIC_POSTGRESS_PASSWORD,
		database: process.env.NEXT_PUBLIC_POSTGRESS_DATABASE!,
	},
	verbose: true,
	strict: true,
});
