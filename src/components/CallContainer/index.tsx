import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
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
  const { isAuth } = useAuth();

  useEffect(() => {
    io.on("connect", () => {
      io.on("get-all-calls", (data) => {
        try {
          setCalls(data);
        } catch (error) {
          console.error(error);
        } //todo error message
      });

      try {
        io.on("update-orders", (data) => {
          console.log(data);

          setCalls((oldState) => [data, ...oldState]);
        });
      } catch (error) {
        console.error(error);
      }
    });

    io.on("disconnect", () => {
      setCalls([]);
    });
  }, []);

  return (
    <section className="order" id="orders">
      {calls.map((call) => (
        <OrderItem order={call} />
      ))}
    </section>
  );
}
