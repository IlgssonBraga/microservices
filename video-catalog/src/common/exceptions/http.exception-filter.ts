import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import HttpErrorException from './http.exception';
import { Response } from 'express';

@Catch(HttpErrorException)
export class HttpErrorExceptionFilter implements ExceptionFilter {
  catch(exception: HttpErrorException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    return response.status(exception.statusCode).json({
      error: {
        code: exception.statusCode,
        error: exception.error,
        message: exception.message,
      },
    });
  }
}
