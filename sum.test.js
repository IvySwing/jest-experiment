const sum = require('./sum');

test ('adds 1 + 2 equals 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('the sum is 100', () => {
    expect(sum(99,1)).toBe(100)
})

test ('does not accept letters', () => {
    expect( () => {sum('c','d')}).toThrow()
})

test('sum must be less than or equal to 100', () => {
    expect( () => {sum(99,2)}).toThrow
})

test('sum expected and received should be <= 100', () => {
    expect(sum(88,12)).toBeLessThanOrEqual(100)
})