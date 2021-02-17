const createPhoneNumber = require('./cw4-6kyu');

test('Create Phone Number 1', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890")
})

test('Create Phone Number 2', () => {
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual("(111) 111-1111")
})

test('Create Phone Number 3', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890")
})