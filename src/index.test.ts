import { delay } from ".";

test("Delays Properly", async () => {
  expect(delay(1000)).resolves.toBeUndefined();
});

test("Callback Working", async () => {
  let testBool = false;

  await delay(1000, () => (testBool = true));
  expect(testBool).toBeTruthy();
});
