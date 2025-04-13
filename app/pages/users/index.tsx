import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

// Mock user data
const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "Admin",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    role: "Developer",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "Designer",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Manager",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "Developer",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function UsersPage() {
  return (
    <div className="mx-auto p-6">
      <div className="flex items-center justify-between">
        <Typography variant="h1" className="mb-4">
          Users
        </Typography>
        <Button>Add User</Button>
      </div>
      <div className="mt-4 relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-10" placeholder="Search users..." />
      </div>
      <div className="mt-6">
        <div className="rounded-md border">
          <div className="grid grid-cols-5 border-b bg-muted/50 p-3 text-sm font-medium">
            <div>Name</div>
            <div className="col-span-2">Email</div>
            <div>Role</div>
            <div className="text-right">Actions</div>
          </div>
          <div className="divide-y">
            {users.map((user) => (
              <div key={user.id} className="grid grid-cols-5 items-center p-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                    />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </div>
                <div className="col-span-2 text-muted-foreground">
                  {user.email}
                </div>
                <div>{user.role}</div>
                <div className="flex justify-end gap-2">
                  <Link to={`/users/${user.id}`}>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </Link>
                  <Link to={`/users/${user.id}/settings`}>
                    <Button variant="outline" size="sm">
                      Settings
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
