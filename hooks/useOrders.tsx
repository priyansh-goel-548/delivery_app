import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client/react';
import { GET_ORDERS } from '@/lib/order';

const useOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);
  
  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({value}: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      trackingId: value.trackingId,
      shippingCost: value.shippingCost,
      Address: value.Address,
      City: value.City,
      Lat: value.Lat,
      Lng: value.Lng,
      
    }));

    setOrders(orders);
  }, [data]);
  return {loading, error, orders}
}

export default useOrders
