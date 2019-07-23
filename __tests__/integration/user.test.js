import request from 'supertest'
import app from '../../src/app'

describe('User', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Lorem Ipsum',
        email: 'lorem@ipsum.com',
        password_hash: '12345678',
      })

    expect(response.body).toHaveProperty('id')
  })
})
