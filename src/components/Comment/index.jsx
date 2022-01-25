import React from "react";
import { useComent } from "src/hooks/useComent";

export const CommentComponent = () => {
	const { data, error, isLoading } = useComent();

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
