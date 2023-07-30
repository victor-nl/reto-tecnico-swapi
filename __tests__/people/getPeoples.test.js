const getPeoples = require('../../src/functions/people/getPeoples')
const { runParams } = require('../util')
const data = require('./personaje.json')

describe('people.getPeoples', () => {
  beforeAll((done) => {
    done()
  })

  it('Verificar lista de personajes', async () => {
    const response = await runParams(getPeoples, {})
    expect(Array.isArray(response.body)).toEqual(true)
    expect(response.statusCode).toEqual(200)
  })
})
