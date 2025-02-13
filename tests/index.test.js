const request = require('supertest');
const app = require('../index'); // Import the app from the parent directory

jest.mock('../products', () => ([
    { id: 1, name: 'mockProduct1' },
    { id: 2, name: 'mockProduct2' },
    { id: 3, name: 'mockProduct3' },
    { id: 4, name: 'mockProduct4' },
    { id: 5, name: 'mockProduct5' }
]));

describe('GET /api/products', () => {
  it('should return a list of products with status true', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
    expect(response.body.products).toBeInstanceOf(Array);
    expect(response.body.products.length).toBe(5);
    expect(response.body.products[0].name).toBe('mockProduct1');
  });
});