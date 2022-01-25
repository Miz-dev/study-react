import Link from "next/link";
import React from "react";
import { useComments } from "src/hooks/useComments";

export const CommentsComponents = () => {
	const { data, error, isLoading, isEmpty } = useComments();

	if (isLoading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}
	if (isEmpty) {
		return <p>No comments found.</p>;
	}
	return (
		<ol>
			{data.map((comments) => {
				return (
					<li key={comments.id}>
						<Link href={`/comments/${comments.id}`}>
							<a>{comments.body}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};
