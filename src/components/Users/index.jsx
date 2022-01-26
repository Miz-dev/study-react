import Link from "next/link";
import React from "react";
import { useUsers } from "src/hooks/useFetchArray";

export const UsersComponent = () => {
	const { data, error, isLoading, isEmpty } = useUsers();

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (isEmpty) {
		return <div>No users found.</div>;
	}
	return (
		<ol>
			{data.map((user) => {
				return (
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a>{`${user.name} (${user.email})`}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};
