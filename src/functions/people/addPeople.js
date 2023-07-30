import dynamodb from '@libs/dynamodb'
import responseJson from '@libs/responseJson'
import { v4 as uuidv4 } from 'uuid'
import { TableName } from './utils/constant'

export const handler = async (event) => {
  try {
    const client = dynamodb()
    const id = uuidv4()
    const data = JSON.parse(event.body)
    data.id = id

    await client.put({
      TableName,
      Item: data
    }).promise()

    return responseJson(null, { id }, 201)
  } catch (err) {
    return responseJson(err)
  }
}
