const getCount = require('./cw2-7kyu');

test('get count 1', () => {
    expect(getCount('dfsijoih')).toBe(3)
})

test('get count 3', () => {
    expect(getCount('fa')).toBe(1)
})

test('get count 3', () => {
    expect(getCount('vijqjkdfgqivmowiht')).toBe(4)
})