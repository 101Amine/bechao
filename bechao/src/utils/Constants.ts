export const ROOT_URL = 'http://localhost:5004';



export const logger = (...messages:any) => {
	if (process.env.NODE_ENV === 'development') {
		console.log(...messages);
	}
}

