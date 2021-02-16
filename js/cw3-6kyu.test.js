const digPow = require('./cw3-6kyu');


test('dig pow 1', () => {
    expect(digPow(89, 1)).toBe(1)
})

test('dig pow 2', () => {
    expect(digPow(92, 1)).toBe(-1)
})

test('dig pow 3', () => {
    expect(digPow(695, 2)).toBe(2)
})

test('dig pow 4', () => {
    expect(digPow(46288, 3)).toBe(51)
})