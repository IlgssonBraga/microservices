class HttpErrorException {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly error: string;

  constructor(message: string, error: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default HttpErrorException;
