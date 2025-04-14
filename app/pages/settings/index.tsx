import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Typography from "@/components/ui/typography";
import { Bell, Key, User } from "lucide-react";

// Mock user data - in a real app, you would fetch this based on the ID
const getUserData = (id: string) => {
  const users = {
    "1": {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      role: "Admin",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      department: "Engineering",
      bio: "Alex is a senior software engineer with over 10 years of experience in web development. He specializes in frontend architecture and performance optimization.",
    },
    "2": {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      role: "Developer",
      phone: "+1 (555) 987-6543",
      location: "New York, NY",
      department: "Product",
      bio: "Sarah is a full-stack developer focused on building scalable web applications. She has a strong background in React and Node.js.",
    },
    "3": {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Designer",
      phone: "+1 (555) 456-7890",
      location: "Austin, TX",
      department: "Design",
      bio: "Michael is a UI/UX designer with a passion for creating intuitive and beautiful user interfaces. He has experience in product design and brand identity.",
    },
    "4": {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Manager",
      phone: "+1 (555) 789-0123",
      location: "Chicago, IL",
      department: "Operations",
      bio: "Emily is a project manager with a background in agile methodologies. She excels at coordinating cross-functional teams and delivering projects on time.",
    },
    "5": {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@example.com",
      role: "Developer",
      phone: "+1 (555) 234-5678",
      location: "Seattle, WA",
      department: "Engineering",
      bio: "David is a backend developer specializing in database optimization and API design. He has extensive experience with SQL and NoSQL databases.",
    },
  };

  return users[id as keyof typeof users] || users["1"];
};

export default function UserSettingsPage() {
  return (
    <div className="p-6">
      <Typography variant="h2" className="mb-4">
        Settings
      </Typography>
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="w-full justify-start p-0">
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="account">
            <Key className="mr-2 h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={getUserData("1").name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={getUserData("1").email}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue={getUserData("1").phone} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    defaultValue={getUserData("1").location}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    defaultValue={getUserData("1").bio}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Profile</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Work Information</CardTitle>
              <CardDescription>Update your work details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select defaultValue={getUserData("1").department}>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Product">Product</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Operations">Operations</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue={getUserData("1").role}>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Developer">Developer</SelectItem>
                      <SelectItem value="Designer">Designer</SelectItem>
                      <SelectItem value="Manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Work Info</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>
                Add an extra layer of security to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">
                    Enable Two-Factor Authentication
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Protect your account with an additional security layer
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>Irreversible account actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Delete Account</h3>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and all data
                  </p>
                </div>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>
                Manage your email notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Project Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about project changes and updates
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Team Messages</h3>
                    <p className="text-sm text-muted-foreground">
                      Get notified when someone mentions you in a message
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Account Alerts</h3>
                    <p className="text-sm text-muted-foreground">
                      Security and account-related notifications
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marketing Emails</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive promotional emails and offers
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In-App Notifications</CardTitle>
              <CardDescription>
                Manage your in-app notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Desktop Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Show desktop notifications for important updates
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Sound Alerts</h3>
                    <p className="text-sm text-muted-foreground">
                      Play sound when receiving new notifications
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
