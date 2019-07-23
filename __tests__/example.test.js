function sum(a, b) {
  return a + b
}

test('adding 4 plus 5 should equal 9', () => {
  const result = sum(4, 5)
  expect(result).toBe(9)
})
