import React from "react";
import Head from "next/head";
import { Header } from "src/components/Header";
import { CommentsComponents } from "src/components/Comments";

const Comments = () => {
	return (
		<div>
			<Head>
				<title>Comments Page</title>
			</Head>
			<Header />
			<CommentsComponents />
		</div>
	);
};

export default Comments;
