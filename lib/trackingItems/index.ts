import { gql } from "@apollo/client";

export const GET_TRACKING_ITEMS = gql`
  query GetTrackingItems($id: ID!) {
    trackingItems(id: $id) {
      customer_id
      items {
        item_id
        name
        price
        quantity
      }
    }
  }
`;