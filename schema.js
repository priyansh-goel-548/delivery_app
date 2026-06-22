const typeDefs = `#graphql

type Order {
  carrier: String
  createdAt: String
  shippingCost: Int
  trackingId: String
  Address: String
  City: String
  Lat: Float
  Lng: Float
}

type Item {
  item_id: Int
  name: String
  price: Float
  quantity: Int
}

type TrackingItemsList {
  customer_id: String
  items: [Item]
}

type Query {
  getOrders: [Order]
  getTrackingItemsById(id: ID!): TrackingItemsList
}
`;

module.exports = typeDefs;