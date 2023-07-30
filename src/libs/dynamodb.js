const { DocumentClient } = require('aws-sdk/clients/dynamodb')

const conexion = () => {
  let options
  const IS_OFFLINE = process.env.IS_OFFLINE || process.env.IS_LOCAL
  if (IS_OFFLINE) {
    options = {
      region: 'us-east-1',
      endpoint: 'http://localhost:8001'
      // accessKeyId: 'DUMMYIDEXAMPLE',
      // secretAccessKey: 'DUMMYEXAMPLEKEY'
    }
  } else {
    options = {}
  }
  return new DocumentClient(options)
}
export default conexion
