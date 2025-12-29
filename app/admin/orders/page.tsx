"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

// Mock order data
const initialOrders = [
  {
    id: "ORD-001",
    customer: "Nguyen Thi Mai",
    date: "2024-12-15",
    total: "1,250,000đ",
    paymentStatus: "Pending",
    deliveryStatus: "Processing",
  },
  {
    id: "ORD-002",
    customer: "Tran Van An",
    date: "2024-12-14",
    total: "2,400,000đ",
    paymentStatus: "Paid",
    deliveryStatus: "Shipped",
  },
  {
    id: "ORD-003",
    customer: "Le Thi Hoa",
    date: "2024-12-13",
    total: "980,000đ",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
  },
  {
    id: "ORD-004",
    customer: "Pham Van Minh",
    date: "2024-12-12",
    total: "3,100,000đ",
    paymentStatus: "Pending",
    deliveryStatus: "Pending",
  },
  {
    id: "ORD-005",
    customer: "Hoang Thi Lan",
    date: "2024-12-11",
    total: "1,830,000đ",
    paymentStatus: "Paid",
    deliveryStatus: "Shipped",
  },
];

type Order = typeof initialOrders[0];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const togglePaymentStatus = (orderId: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              paymentStatus:
                order.paymentStatus === "Pending" ? "Paid" : "Pending",
            }
          : order
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-serif text-4xl font-semibold text-foreground mb-2">
          Orders
        </h1>
        <p className="font-sans text-sm font-light text-foreground/70">
          Manage and track customer orders
        </p>
      </div>

      {/* Orders Table */}
      <div className="bg-background border border-foreground/10 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-soft-accent border-b border-foreground/10">
            <tr>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Order ID
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Customer
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Date
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Total
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Payment Status
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Delivery Status
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-soft-accent/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-medium text-foreground">
                    {order.id}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-light text-foreground">
                    {order.customer}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-light text-foreground/70">
                    {order.date}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-normal text-foreground">
                    {order.total}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {order.paymentStatus === "Pending" ? (
                    <button
                      onClick={() => togglePaymentStatus(order.id)}
                      className="inline-block px-3 py-1 text-xs font-sans font-light uppercase tracking-wide bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition-colors cursor-pointer"
                    >
                      {order.paymentStatus}
                    </button>
                  ) : (
                    <span className="inline-block px-3 py-1 text-xs font-sans font-light uppercase tracking-wide bg-green-100 text-green-700">
                      {order.paymentStatus}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-sans font-light uppercase tracking-wide ${
                      order.deliveryStatus === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.deliveryStatus === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.deliveryStatus === "Processing"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-foreground/10 text-foreground/70"
                    }`}
                  >
                    {order.deliveryStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

