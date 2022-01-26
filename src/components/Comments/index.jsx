import React from "react";
import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const CommentsComponents = () => {
	const { data, error, isLoading, isEmpty } = useComments();
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (isEmpty) {
		return <div>No comments found.</div>;
	}
	return (
		<ol>
			{data.map((data) => {
				return (
					<li key={data.id}>
						<Link href={`/comments/${data.id}`}>
							<a>{data.body}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};
