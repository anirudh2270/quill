import { publicProcedure, router } from "./trpc";

export const appRouter = router({
	authCallback: publicProcedure.query(async () => {}),
});

export type AppRouter = typeof appRouter;