"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts"

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [selectedReport, setSelectedReport] = useState("sales")

  // Mock data for charts
  const salesData = [
    { name: "Jan", sales: 4000, orders: 24 },
    { name: "Feb", sales: 3000, orders: 18 },
    { name: "Mar", sales: 5000, orders: 32 },
    { name: "Apr", sales: 4500, orders: 28 },
    { name: "May", sales: 6000, orders: 38 },
    { name: "Jun", sales: 5500, orders: 35 },
  ]

  const inventoryData = [
    { name: "Electronics", value: 45, color: "#0088FE" },
    { name: "Furniture", value: 30, color: "#00C49F" },
    { name: "Office Supplies", value: 15, color: "#FFBB28" },
    { name: "Others", value: 10, color: "#FF8042" },
  ]

  const topProducts = [
    { name: "Laptop Computer", sales: 125, revenue: 124875 },
    { name: "Office Chair", sales: 89, revenue: 26701 },
    { name: "Wireless Mouse", sales: 156, revenue: 7794 },
    { name: "Desk Lamp", sales: 67, revenue: 5359 },
    { name: "Monitor", sales: 43, revenue: 12900 },
  ]

  const recentTransactions = [
    { id: "TXN-001", type: "Sale", amount: 1299.99, date: "2024-01-16", status: "Completed" },
    { id: "TXN-002", type: "Purchase", amount: -850.00, date: "2024-01-16", status: "Completed" },
    { id: "TXN-003", type: "Sale", amount: 299.99, date: "2024-01-15", status: "Pending" },
    { id: "TXN-004", type: "Refund", amount: -149.99, date: "2024-01-15", status: "Completed" },
    { id: "TXN-005", type: "Sale", amount: 79.99, date: "2024-01-14", status: "Completed" },
  ]

  const handleExportReport = () => {
    // Mock export functionality
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Report Type,Period,Generated Date\n" +
      `${selectedReport},${selectedPeriod},${new Date().toISOString().split('T')[0]}\n\n` +
      "Sample Data Export\n" +
      "This would contain the actual report data in a real implementation"
    
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `${selectedReport}_report_${selectedPeriod}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground">
            Analyze your business performance with detailed reports
          </p>
        </div>
        <Button onClick={handleExportReport}>
          Export Report
        </Button>
      </div>

      {/* Report Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Report Configuration</CardTitle>
          <CardDescription>
            Select the type of report and time period
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Report Type</label>
              <Select value={selectedReport} onValueChange={setSelectedReport}>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Report</SelectItem>
                  <SelectItem value="inventory">Inventory Report</SelectItem>
                  <SelectItem value="financial">Financial Report</SelectItem>
                  <SelectItem value="customer">Customer Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Time Period</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Sales Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>
              Monthly sales and order trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Inventory Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory Distribution</CardTitle>
            <CardDescription>
              Product categories breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={inventoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {inventoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>
              Best performing products this period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.map((product, index) => (
                  <TableRow key={product.name}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.sales}</TableCell>
                    <TableCell>${product.revenue.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Latest financial transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{transaction.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.type} • {transaction.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <Badge 
                      variant={transaction.status === "Completed" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>
            Monthly revenue progression over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#8884d8" 
                strokeWidth={2}
                dot={{ fill: '#8884d8' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
