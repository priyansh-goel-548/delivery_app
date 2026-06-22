import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query {
    orders {
      carrier
      createdAt
      shippingCost
      trackingId
      Address
      City
      Lat
      Lng
    }
  }
`;