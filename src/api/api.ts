import axios, { AxiosError } from 'axios';

export const postData = async (url, data) => {
	try {
		const res = await axios.post(url, data);
		//결과가 정상이고 메세지가 있을경우만
		if (res.status === 200 && res.data.message) {
			alert(res.data.message);
		}
		return res.data;
	} catch (e) {
		if (e instanceof AxiosError) {
			//에러메세지 뿌려줌
			alert(e.response?.data.details);
		}
	}
};

export const getData = async (url) => {
	try {
		const res = await axios.get(url);
		//결과가 정상이고 메세지가 있을경우만
		if (res.status === 200 && res.data.message) {
			alert(res.data.message);
		}
		return res.data;
	} catch (e) {
		if (e instanceof AxiosError) {
			//에러메세지 뿌려줌
			alert(e.response?.data.details);
		}
	}
};
