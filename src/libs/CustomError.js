export default class CustomError extends Error {
  constructor (message, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
  }

  static isCustom (error) {
    return error instanceof CustomError
  }
}
