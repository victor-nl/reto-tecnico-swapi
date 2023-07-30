import dynamodb from '@libs/dynamodb'
import responseJson from '@libs/responseJson'
import { TableName } from './utils/constant'

export const handler = async () => {
  try {
    const client = dynamodb()
    const result = await client.scan({ TableName }).promise()
    return responseJson(null, result.Items)
  } catch (err) {
    return responseJson(err)
  }
}
