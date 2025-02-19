// npm run test -- server.test.ts

import request from 'supertest';
import { app, User } from './server';

describe('API TEST', () => {
    let orginalFindAll

    beforeAll(() => {
        orginalFindAll = User.findAll;

        // Mô phỏng database
        User.findAll = async () => [
            { id: 1, name: 'Linh' },
            { id: 2, name: 'Tài' },
            { id: 3, name: 'Phúc' },
            { id: 4, name: 'Tuấn' },
        ]
    })

    afterAll(() => {
        User.findAll = orginalFindAll;
    })

    test('Trả về danh sách users từ database', async () => {
        const response = await request(app).get('/api/users');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(4);
        expect(response.body[0]).toHaveProperty('name', 'Linh');
    })
})