import { GET_ORDERS } from '@/lib/order';
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client/react';


function useCustomersOrders(userId: string) {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  
  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({value}: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      trackingId: value.trackingId,
      trackingItems: value.trackingItems,
      shippingCost: value.shippingCost,
      Address: value.Address,
      City: value.City,
      Lat: value.Lat,
      Lng: value.Lng,
      
    }));

    const customersOrders = orders.filter(order => order.trackingItems[0].customerId === userId);

    setOrders(customersOrders);
  }, [data]);
  return {loading, error, orders}
}

export default useCustomersOrders
