import React from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";

export default function About({
	doubleCount,
	isShow,
	handleClick,
	handleDisplay,
	text,
	array,
	handleChange,
	handleAdd,
}) {
	return (
		<div className={styles.container}>
			<Head>
				<title>About Page</title>
			</Head>
			<Header />

			<button onClick={handleClick}>ボタン</button>
			<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
			{isShow ? <h2>{doubleCount}</h2> : null}

			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
			<Main page="about" />
			<Footer />
		</div>
	);
}
