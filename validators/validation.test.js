const validate = require('./validation');

test("should validate a valid text", () => {
  const data = { text: "Hello World" };
  const valid = validate(data);
  expect(valid).toBe(true);
});

test("should invalidate a text that's too short", () => {
  const data = { text: "Hi" };
  const valid = validate(data);
  expect(valid).toBe(false);
});

test("should invalidate a text that's too long", () => {
  const data = { text: "hello".repeat(100) };
  const valid = validate(data);
  expect(valid).toBe(false);
});

test("should invalidate a text with numbers", () => {
  const data = { text: "Hello123" };
  const valid = validate(data);
  expect(valid).toBe(false);
});

test("should invalidate a text with special characters", () => {
  const data = { text: "Hello@" };
  const valid = validate(data);
  expect(valid).toBe(false);
});
