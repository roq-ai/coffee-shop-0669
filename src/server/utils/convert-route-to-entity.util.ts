const mapping: Record<string, string> = {
  companies: 'company',
  managers: 'manager',
  orders: 'order',
  'order-items': 'order_item',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
