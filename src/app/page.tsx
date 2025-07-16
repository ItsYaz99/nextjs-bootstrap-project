"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  // Mock data for demonstration
  const metrics = [
    {
      title: "Total Users",
      value: "1,234",
      description: "Active users in system",
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      title: "Inventory Items",
      value: "5,678",
      description: "Items in stock",
      change: "+5%",
      changeType: "positive" as const,
    },
    {
      title: "Orders Today",
      value: "89",
      description: "Orders processed",
      change: "-3%",
      changeType: "negative" as const,
    },
    {
      title: "Revenue",
      value: "$45,678",
      description: "Monthly revenue",
      change: "+18%",
      changeType: "positive" as const,
    },
  ]

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", amount: "$299.99", status: "Completed" },
    { id: "ORD-002", customer: "Jane Smith", amount: "$149.50", status: "Processing" },
    { id: "ORD-003", customer: "Bob Johnson", amount: "$89.99", status: "Pending" },
    { id: "ORD-004", customer: "Alice Brown", amount: "$199.99", status: "Completed" },
  ]

  const lowStockItems = [
    { name: "Product A", stock: 5, threshold: 10 },
    { name: "Product B", stock: 2, threshold: 15 },
    { name: "Product C", stock: 8, threshold: 20 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your ERP system overview
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
              <div className="mt-2">
                <Badge 
                  variant={metric.changeType === "positive" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest orders from your customers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <Badge 
                      variant={
                        order.status === "Completed" ? "default" :
                        order.status === "Processing" ? "secondary" : "outline"
                      }
                      className="text-xs"
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alert</CardTitle>
            <CardDescription>
              Items that need restocking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.stock}/{item.threshold}
                    </p>
                  </div>
                  <Progress 
                    value={(item.stock / item.threshold) * 100} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
