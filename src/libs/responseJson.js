import CustomError from '@libs/customError'
const headers = {
  'Content-Type': 'application/json'
}

const reponseError = (error) => {
  let statusCode = 500
  let message = 'Ocurrió un error inesperado'
  if (CustomError.isCustom(error)) {
    statusCode = error.statusCode
    message = error.message
  } else {
    console.error(error)
  }
  return {
    headers,
    statusCode,
    body: JSON.stringify({ message })
  }
}

const reponseSuccess = (body, statusCode) => {
  return {
    headers,
    statusCode,
    body: JSON.stringify(body)
  }
}

export default (error, body = null, statusCode = 200) => {
  if (error) {
    return reponseError(error)
  }
  return reponseSuccess(body, statusCode)
}
