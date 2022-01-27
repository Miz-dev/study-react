import useSWR from "swr";

const useFetchArray = (url) => {
	const { data, error } = useSWR(url);

	return {
		data,
		error,
		isLoading: !data && !error,
		isEmpty: data && data.length === 0,
	};
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
	return useFetchArray(`${API_URL}/comments`);
};

export const usePosts = () => {
	return useFetchArray(`${API_URL}/posts`);
};

export const useUsers = () => {
	return useFetchArray(`${API_URL}/users`);
};
export const useCommentsByPostsId = (id) => {
	return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
export const usePostsByUserId = (id) => {
	return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};