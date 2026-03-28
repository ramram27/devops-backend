const request = require('supertest');
const app = require('../index')


describe('math api', ()=>{

    test('POST /add ', async ()=>{
        const res = await request(app)
        .post('/add')
        .send({num1:10, num2:5});

        expect(res.statusCode).toEqual(200);
        expect(res.body.sum).toEqual(15);
    })
})