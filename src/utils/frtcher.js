export const fetcher = async (url) => {
	const responce = await fetch(url);

	if (!responce.ok) {
		throw new Error("エラーが発生したため、データの取得に失敗しました");
	}

	const json = await responce.json();
	return json;
};
