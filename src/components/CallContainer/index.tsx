import React, { useEffect, useState } from "react";
import io from "../../services/socketio";
import OrderItem from "../OrderItem";

interface ICall {
  _id: string;
  sector: string;
  author: string;
  date: string;
  resume: string;
}

export default function CallContainer() {
  const [calls, setCalls] = useState<ICall[]>([]);

  useEffect(() => {
    io.on("get-all-calls", (data) => {
      try {
        setCalls(data);
      } catch (error) {
        console.error(error);
      } //todo error message
    });

    try {
      io.on("update-orders", (order) => {
        console.log({ order });

        setCalls((oldState) => [order, ...oldState]);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section className="order" id="orders">
      {calls.map((call) => (
        <OrderItem order={call} />
      ))}
    </section>
  );
}
