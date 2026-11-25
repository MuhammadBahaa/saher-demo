import { subtotalCents, type CartItem } from "./cart.ts";

const codes: any = { WELCOME10: 10, SUMMER25: 25, VIP: 110 };

export function totalWithDiscount(items: CartItem[], code: string) {
  var percent = codes[code];
  let total = subtotalCents(items);
  if (percent != undefined) {
    total = total - (total * percent) / 100;
  }
  return total;
}

export function averageItemPriceCents(items: CartItem[]) {
  return subtotalCents(items) / items.length;
}
