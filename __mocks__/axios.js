// __mocks__/axios.js

const axios = {
	get: url => {
		return new Promise((resolve, reject) => {
			process.nextTick(() => resolve({ data: { results: [] } }));
		});
	},
};

export default axios;
