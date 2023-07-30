import dynamodb from '@libs/dynamodb'
import responseJson from '@libs/responseJson'
import { TableName } from './utils/constant'
import CustomError from '@libs/customError'

export const handler = async (event, context) => {
  try {
    const client = dynamodb()
    const { id } = event.pathParameters

    const result = await client.get({
      TableName,
      Key: {
        id
      }
    }).promise()

    if (result.Item === undefined) {
      throw new CustomError('Personaje no encontrado', 404)
    }
    return responseJson(null, result.Item)
  } catch (err) {
    return responseJson(err)
  }
}
