import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";

function AuthCallback() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const origin = searchParams.get("origin");

	return <div>{origin}</div>;
}

export default AuthCallback;
