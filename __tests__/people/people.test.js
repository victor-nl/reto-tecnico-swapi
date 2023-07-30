const addPeople = require('../../src/functions/people/addPeople')
const getPeople = require('../../src/functions/people/getPeople')
const { runBody, runParams } = require('../util')
const data = require('./personaje.json')

describe('people.postGet', () => {
  beforeAll((done) => {
    done()
  })

  let id
  it('Registrar personaje', async () => {
    const response = await runBody(addPeople, data )
    id = response.body.id
    expect(response.body).toBeDefined()
    expect(response.statusCode).toEqual(201)
  })

  it('Verificar personaje registrado', async () => {
    const response = await runParams(getPeople, { id })
    const getData = Object.assign(data, {id} )
    expect(response.body).toEqual(getData)
    expect(response.statusCode).toEqual(200)
  })
})
