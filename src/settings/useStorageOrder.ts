import { useCallback, useState } from "react";
import { Order } from "./order";

export function useStorageOrder(): {
  order: Order;
  saveOrder: (order: Order) => void;
} {
  const storageKey = "settings-useStorageOrder *IJ7DKnWKjX3vEKt";

  const [order, setOrder] = useState(() => {
    const text = localStorage.getItem(storageKey);

    if (!text) {
      return Order.Random;
    }

    const textOrder = text as Order;

    const allOrders = Object.values(Order);

    if (!allOrders.includes(textOrder)) {
      return Order.Random;
    }

    return textOrder;
  });

  const saveOrder = useCallback((order: Order) => {
    setOrder(order);

    localStorage.setItem(storageKey, order);
  }, []);

  return {
    order,
    saveOrder,
  };
}
