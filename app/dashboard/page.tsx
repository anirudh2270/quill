import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function Dashboard() {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user) {
		redirect("/auth-callback?origin=dashbaord");
	}

	return <div>Dashboard</div>;
}

export default Dashboard;
