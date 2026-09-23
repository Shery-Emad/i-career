export interface CartLineItem {
  lineId: string;
  productId: string;
  productSlug: string;
  name: string;
  image: string;
  volumeMl: number;
  unitPrice: number;
  quantity: number;
  giftWrap: boolean;
}
