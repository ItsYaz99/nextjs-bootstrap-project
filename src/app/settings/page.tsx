"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // General Settings
    companyName: "My Company",
    companyEmail: "admin@mycompany.com",
    companyPhone: "+1 (555) 123-4567",
    companyAddress: "123 Business St, City, State 12345",
    timezone: "UTC-5",
    currency: "USD",
    
    // Notification Settings
    emailNotifications: true,
    orderNotifications: true,
    inventoryAlerts: true,
    systemUpdates: false,
    
    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
    
    // System Settings
    autoBackup: true,
    backupFrequency: "daily",
    maintenanceMode: false,
    debugMode: false,
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async (section: string) => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    // In a real app, you would save to your backend here
    console.log(`Saved ${section} settings:`, settings)
  }

  const handleInputChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Configure your ERP system preferences and settings
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>
                Update your company details and basic information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={settings.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyEmail">Company Email</Label>
                  <Input
                    id="companyEmail"
                    type="email"
                    value={settings.companyEmail}
                    onChange={(e) => handleInputChange("companyEmail", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyPhone">Phone Number</Label>
                  <Input
                    id="companyPhone"
                    value={settings.companyPhone}
                    onChange={(e) => handleInputChange("companyPhone", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={settings.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                      <SelectItem value="UTC-7">Mountain Time (UTC-7)</SelectItem>
                      <SelectItem value="UTC-6">Central Time (UTC-6)</SelectItem>
                      <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                      <SelectItem value="UTC+0">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyAddress">Company Address</Label>
                <Textarea
                  id="companyAddress"
                  value={settings.companyAddress}
                  onChange={(e) => handleInputChange("companyAddress", e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Default Currency</Label>
                <Select value={settings.currency} onValueChange={(value) => handleInputChange("currency", value)}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD - US Dollar</SelectItem>
                    <SelectItem value="EUR">EUR - Euro</SelectItem>
                    <SelectItem value="GBP">GBP - British Pound</SelectItem>
                    <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={() => handleSave("general")} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Order Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about new orders and status changes
                  </p>
                </div>
                <Switch
                  checked={settings.orderNotifications}
                  onCheckedChange={(checked) => handleInputChange("orderNotifications", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Inventory Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts for low stock and inventory changes
                  </p>
                </div>
                <Switch
                  checked={settings.inventoryAlerts}
                  onCheckedChange={(checked) => handleInputChange("inventoryAlerts", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>System Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about system updates and maintenance
                  </p>
                </div>
                <Switch
                  checked={settings.systemUpdates}
                  onCheckedChange={(checked) => handleInputChange("systemUpdates", checked)}
                />
              </div>
              <Button onClick={() => handleSave("notifications")} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={settings.twoFactorAuth ? "default" : "secondary"}>
                    {settings.twoFactorAuth ? "Enabled" : "Disabled"}
                  </Badge>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => handleInputChange("twoFactorAuth", checked)}
                  />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                <Select value={settings.sessionTimeout} onValueChange={(value) => handleInputChange("sessionTimeout", value)}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                    <SelectItem value="480">8 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                <Select value={settings.passwordExpiry} onValueChange={(value) => handleInputChange("passwordExpiry", value)}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={() => handleSave("security")} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>
                Configure system-wide settings and maintenance options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Automatic Backup</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically backup system data
                  </p>
                </div>
                <Switch
                  checked={settings.autoBackup}
                  onCheckedChange={(checked) => handleInputChange("autoBackup", checked)}
                />
              </div>
              {settings.autoBackup && (
                <div className="space-y-2 ml-4">
                  <Label htmlFor="backupFrequency">Backup Frequency</Label>
                  <Select value={settings.backupFrequency} onValueChange={(value) => handleInputChange("backupFrequency", value)}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Put the system in maintenance mode
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={settings.maintenanceMode ? "destructive" : "default"}>
                    {settings.maintenanceMode ? "Active" : "Inactive"}
                  </Badge>
                  <Switch
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => handleInputChange("maintenanceMode", checked)}
                  />
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Debug Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable debug logging and error reporting
                  </p>
                </div>
                <Switch
                  checked={settings.debugMode}
                  onCheckedChange={(checked) => handleInputChange("debugMode", checked)}
                />
              </div>
              <Button onClick={() => handleSave("system")} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
              <CardDescription>
                Current system status and information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">System Version</Label>
                  <p className="text-sm text-muted-foreground">v1.0.0</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Last Backup</Label>
                  <p className="text-sm text-muted-foreground">2024-01-16 03:00 AM</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Database Size</Label>
                  <p className="text-sm text-muted-foreground">245 MB</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Uptime</Label>
                  <p className="text-sm text-muted-foreground">15 days, 4 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
