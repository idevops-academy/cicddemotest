const app = require('../app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


//Unit Tests

function isEvenNumber(nmbr) {
    return nmbr%2 == 0;
}

it('Test if the number is even', () => {
    expect(isEvenNumber(4)).toBe(true);
})

it('Test if the number is odd', () => {
    expect(isEvenNumber(5)).toBe(false);
})

it('Testing to see if Jest works', () => {
    expect(2).toBe(2)
})




// Integration Tests

//test the books endpoints
it('test if the books endpoint returns data', async done => {
    const response = await request.get('/books')
    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length > 0).toBe(true)
    done()
})

//test get book by id
it('get book by id', async done => {
    const response = await request.get('/books/4')
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({id: 4})
    done()
})

//test book not found
it('test book not found', async done => {
    const response = await request.get('/books/7')
    expect(response.status).toBe(404)
    done()
})

//test health end point
it('test health point', async done => {
    const response = await request.get('/health')
    expect(response.status).toBe(200)
    expect(response.body.includes("Healthy")).toBe(true)
    done()
})





