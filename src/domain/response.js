class Response {
	constructor (statusCode, httpCode, message, data) {
		this.timeStamp = new Date().tolocaleString();
		this.statusCode = statusCode;
		this.httpCode = httpCode;
		this.message = message;
		this.data = data;
	}
}

export default Response;
