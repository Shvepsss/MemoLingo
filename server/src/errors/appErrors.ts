import {
  NOT_FOUND,
  EXPECTATION_FAILED,
  UNAUTHORIZED,
  FORBIDDEN,
  BAD_REQUEST,
  getStatusText,
} from "http-status-codes";

class AppError extends Error {
  public status?: number;
  constructor(message: string) {
    super(message);
  }
}

class NotFoundError extends AppError {
  constructor(entity: any, params?: any, message?: string) {
    super(
      message || `Couldn't find a(an) ${entity} with: ${JSON.stringify(params)}`
    );
    this.status = NOT_FOUND;
  }
}

class BadRequestError extends AppError {
  constructor(message: string) {
    super(message);
    this.status = BAD_REQUEST;
  }
}

class EntityExistsError extends AppError {
  constructor(message: string) {
    super(message);
    this.status = EXPECTATION_FAILED;
  }
}

class AuthorizationError extends AppError {
  constructor(message: string) {
    super(message || getStatusText(UNAUTHORIZED));
    this.status = UNAUTHORIZED;
  }
}

class AuthenticationError extends AppError {
  constructor(message: string) {
    super(message || getStatusText(FORBIDDEN));
    this.status = FORBIDDEN;
  }
}

export {
  NotFoundError as NOT_FOUND_ERROR,
  BadRequestError as BAD_REQUEST_ERROR,
  AuthorizationError as AUTHORIZATION_ERROR,
  AuthenticationError as AUTHENTICATION_ERROR,
  EntityExistsError as ENTITY_EXISTS,
};
