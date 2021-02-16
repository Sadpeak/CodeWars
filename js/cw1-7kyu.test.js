const filter_list = require('./cw1-7kyu');

test('filter lists 1', () => {
    expect(filter_list([1, 2, 'a', 'b'])).toEqual([1, 2])
})

test('filter lists 2', () => {
    expect(filter_list([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15])
})

test('filter lists 3', () => {
    expect(filter_list([1, 2, 'aasf', '1', '123', 123])).toEqual([1, 2, 123])
})