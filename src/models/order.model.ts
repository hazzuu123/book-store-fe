export interface Order {
  id: number;
  address: string;
  receiver: string;
  contact: string;
  createdAt: string;
  bookTitle: string;
  totalQuantity: number;
  totalPrice: number;
}

export interface OrderSheet {
  items: number[]; // 카트아이디
  totalQuantity: number;
  totalPrice: number;
  firstBookTitle: string; // 대표 책 제목
  delivery: Delivery;
}

export interface Delivery {
  address: string;
  receiver: string;
  contact: string;
}

export interface OrderItemDetail {
  bookId: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

export interface OrderListItem extends Order {
  detail?: OrderItemDetail[];
}
