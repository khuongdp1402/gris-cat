import { Package, ShoppingBag, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Total Products",
    value: "24",
    icon: Package,
    change: "+12%",
  },
  {
    label: "Total Orders",
    value: "156",
    icon: ShoppingBag,
    change: "+8%",
  },
  {
    label: "Total Customers",
    value: "892",
    icon: Users,
    change: "+15%",
  },
  {
    label: "Revenue",
    value: "₫342M",
    icon: TrendingUp,
    change: "+23%",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-4xl font-semibold text-foreground mb-2">
          Dashboard
        </h1>
        <p className="font-sans text-sm font-light text-foreground/70">
          Welcome back, Admin. Here's an overview of your store.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-background border border-foreground/10 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-5 h-5 text-brand-accent" />
                <span className="font-sans text-xs font-light text-green-600">
                  {stat.change}
                </span>
              </div>
              <p className="font-serif text-3xl font-semibold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-sans text-sm font-light text-foreground/70">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-background border border-foreground/10 p-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
          Recent Orders
        </h2>
        <div className="space-y-4">
          <p className="font-sans text-sm font-light text-foreground/70">
            Recent orders will appear here...
          </p>
        </div>
      </div>
    </div>
  );
}

