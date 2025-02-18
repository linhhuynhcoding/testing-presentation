// npm run test -- main.test.ts

import { genCode } from "./main"

for (let index = 0; index < 100; index++) {
    describe('Unit test', () => {
    
        test('Code length is 6', () => {
            expect(genCode()).toHaveLength(6);
        })
    })
}
