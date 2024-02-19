import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import "dotenv/config";

export const client = new Client({
	host: process.env.NEXT_PUBLIC_POSTGRESS_HOST,
	port: Number(process.env.NEXT_PUBLIC_POSTGRESS_PORT)!,
	user: process.env.NEXT_PUBLIC_POSTGRESS_USERNAME,
	password: process.env.NEXT_PUBLIC_POSTGRESS_PASSWORD,
	database: process.env.NEXT_PUBLIC_POSTGRESS_DATABASE,
});

(async () => {
	await client.connect();
})();

export const db = drizzle(client, { schema: "./schema/*" });
