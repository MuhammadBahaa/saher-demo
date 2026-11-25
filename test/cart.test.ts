import assert from "node:assert/strict";
import { test } from "node:test";
import { itemCount, subtotalCents } from "../src/cart.ts";

const items = [
  { name: "Notebook", priceCents: 450, quantity: 2 },
  { name: "Pen", priceCents: 120, quantity: 5 },
];

test("the subtotal adds price times quantity", () => {
  assert.equal(subtotalCents(items), 1500);
});

test("the item count adds the quantities", () => {
  assert.equal(itemCount(items), 7);
});

test("an empty cart costs nothing", () => {
  assert.equal(subtotalCents([]), 0);
});
