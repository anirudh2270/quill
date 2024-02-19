import { migrate } from "drizzle-orm/mysql2/migrator";
import { client, db } from "./app/db/connection";

(async () => {
	// This will run migrations on the database, skipping the ones already applied
	await migrate(db, { migrationsFolder: "./drizzle" });

	// Don't forget to close the connection, otherwise the script will hang
	await client.end();
})();
