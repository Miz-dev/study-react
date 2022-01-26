import React from "react";
import { useComments } from "src/hooks/useFetchArray";

export const CommentComponent = () => {
	const { data, error, isLoading } = useComments();

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			<h1>{data.body}</h1>
			<ul>
				<li>{data.name}</li>
				<li>{data.email}</li>
			</ul>
		</div>
	);
};
