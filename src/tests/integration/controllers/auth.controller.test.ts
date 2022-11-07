import request from 'supertest';
import app from '../../../app';
import newUser from '../../mock-data/users.json';

const baseUrl = '/api/v1';

describe(baseUrl, () => {
  afterAll(async () => {
    await request(app).delete(`${baseUrl}/delete/${newUser.email}`);
  });
  it(`POST ${baseUrl}/register`, async () => {
    const response = await request(app).post(`${baseUrl}/register`).send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body.firstName).toBe(newUser.firstName);
    expect(response.body.email).toBe(newUser.email);
    expect(response.body.lastName).toBe(newUser.lastName);
  });

  it(`DELETE ${baseUrl}/delete/${newUser.email}`, async () => {
    const postUser = await request(app).post(`${baseUrl}/register`).send(newUser);
    const response = await request(app).delete(`${baseUrl}/delete/${postUser.email}`);
    expect(response.statusCode).toBe(201);
  });
});