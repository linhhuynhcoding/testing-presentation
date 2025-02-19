// npm run test -- main.test.ts

import { genCode } from "./main"

describe('Unit test', () => {

    for (let index = 0; index < 100; index++) {
        test('Code length is 6', () => {
            expect(genCode()).toHaveLength(6);
        })
    }    
})
