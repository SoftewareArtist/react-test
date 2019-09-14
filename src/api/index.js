import axios from 'axios'


export const host = 'localhost:3001';
export const apiUrls = {
	GET_ALL: host + '/articles',
	// GET_BLOCK: apiRoot + '/explorer/getBlock'
};

export function articleAll(callback) {
	
	fetch("http://localhost:3001/articles")
	.then(res => res.json())
	.then(
		(result) => {
			callback(result, null);
		},
		(error) => {
			callback([], error);
		}
	)
}

export function articleDelete(id, callback) {
	fetch(`http://localhost:3001/articles/${id}`, {
		method: 'DELETE'
	});
}

export function articleMarkRead(id, callback) {
	fetch(`http://localhost:3001/articles/${id}`, {
		method: 'PUT',
		
	});
}
