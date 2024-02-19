import { serial, text, pgSchema, timestamp } from "drizzle-orm/pg-core";

const quillSchema = pgSchema("quill_schema");

export const mySchemaUsers = quillSchema.table("users", {
	id: serial("id").primaryKey(),
	name: text("name").unique(),
	stripeCustomerId: text("stripe_customer_id").unique(),
	stripeSubscriptionId: text("stripe_subscription_id").unique(),
	stripePriceId: text("stripe_price_id"),
	stripeCurrenctPeriodEnd: timestamp("stripe_current_period_end").defaultNow(),
});
