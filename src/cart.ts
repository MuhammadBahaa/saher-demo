export type CartItem = {
  name: string;
  priceCents: number;
  quantity: number;
};

export function subtotalCents(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
}

export function itemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}
