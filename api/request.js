const request = async (url, data, method = "GET") => {
	const [err, res] = await uni.request({
		url,
		method,
		data,
	});
	if (!err) {
		return res.data;
	}
	return err;
};

export const get = (url, data = {}) => {
	return request(url, data);
};

export const post = (url, data = {}) => {
	return request(url, data, "POST");
};
