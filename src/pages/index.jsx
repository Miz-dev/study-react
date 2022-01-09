import React, { useCallback, useEffect } from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function Home() {
	const foo = 1;

	const handleClick = useCallback((e) => {
		console.log(e.target.href);
		e.preventDefault();
		alert(foo);
	}, []);

	useEffect(() => {
		console.log("マウント時");
		document.body.style.backgroundColor = "lightblue";
		return () => {
			console.log("アンマウント時");
			document.body.style.backgroundColor = "";
		};
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			<a href="/about" onClick={handleClick}>
				ボタン
			</a>
			<Main page="index" />
			<Footer />
		</div>
	);
}
