const getPeopleSwapi = require('../../src/functions/people/getPeopleSwapi')
const { runParams } = require('../util')
const data = require('./personaje.json')

describe('people.getPeopleSwapi', () => {
  beforeAll((done) => {
    done()
  })

  it('Personaje encontrado', async () => {
    const response = await runParams(getPeopleSwapi, { id: 1 })
    expect(response.body).toEqual(data)
    expect(response.statusCode).toEqual(200)
  })

  it('Personaje no encontrado', async () => {
    const response = await runParams(getPeopleSwapi, { id: 9999 })
    expect(response.body).toBeDefined()
    expect(response.statusCode).toEqual(404)
  })
})
