import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Socket from "../../services/socketio";
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
    if (isAuth) {
      Socket.io.on("get-all-calls", (data) => {
        try {
          setCalls(data);
        } catch (error) {
          console.error(error);
        } //todo error message
      });

      try {
        Socket.io.on("update-orders", (data) => {
          setCalls((old) => [data, ...old]);
        });
      } catch (error) {
        console.error(error);
      }

      Socket.io.on("disconnect", () => {
        setCalls([]);
      });

      return () => {
        Socket.io.disconnect();
      };
    }
  }, [isAuth]);

  return (
    <section className="order" id="orders">
      {calls.map((call) => (
        <OrderItem order={call} />
      ))}
    </section>
  );
}
