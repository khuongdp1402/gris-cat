export default function CustomersPage() {
  // Mock customer data
  const customers = [
    {
      id: 1,
      name: "Nguyen Thi Mai",
      email: "mai.nguyen@example.com",
      orders: 3,
      totalSpent: "4,650,000đ",
    },   
    {
      id: 2,
      name: "Tran Van An",
      email: "an.tran@example.com",
      orders: 1,
      totalSpent: "2,400,000đ",
    },
    {
      id: 3,
      name: "Le Thi Hoa",
      email: "hoa.le@example.com",
      orders: 2,
      totalSpent: "1,980,000đ",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-4xl font-semibold text-foreground mb-2">
          Customers
        </h1>
        <p className="font-sans text-sm font-light text-foreground/70">
          Manage your customer database
        </p>
      </div>

      <div className="bg-background border border-foreground/10 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-soft-accent border-b border-foreground/10">
            <tr>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Name
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Email
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Orders
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Total Spent
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-soft-accent/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-light text-foreground">
                    {customer.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-light text-foreground/70">
                    {customer.email}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-light text-foreground">
                    {customer.orders}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-normal text-foreground">
                    {customer.totalSpent}
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

