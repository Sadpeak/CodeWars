const orderWeight = require('./cw8-5kyu.js')


test('nameTest 1', () => {
    expect(orderWeight("103 123 4444 99 2000")).toEqual("2000 103 123 4444 99")
})

test('nameTest 2', () => {
    expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toEqual("11 11 2000 10003 22 123 1234000 44444444 9999")
})

