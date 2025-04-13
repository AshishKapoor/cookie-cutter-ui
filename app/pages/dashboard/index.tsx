"use client";

import Typography from "@/components/ui/typography";

const DashboardPage = () => {
  return (
    <div className="p-6">
      <Typography variant="h1" className="mb-4">
        Dashboard
      </Typography>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-col space-y-1.5">
            <Typography variant="h3">Total Users</Typography>
            <Typography variant="p">Your total user count</Typography>
          </div>
          <div className="mt-4">
            <Typography variant="p">1,234</Typography>
            <Typography
              variant="p"
              className="text-xs text-muted-foreground mt-1"
            >
              +12% from last month
            </Typography>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-col space-y-1.5">
            <Typography variant="h3">Revenue</Typography>
            <Typography variant="p">Monthly revenue</Typography>
          </div>
          <div className="mt-4">
            <Typography variant="p">$12,345</Typography>
            <Typography
              variant="p"
              className="text-xs text-muted-foreground mt-1"
            >
              +8% from last month
            </Typography>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-col space-y-1.5">
            <Typography variant="h3">Active Projects</Typography>
            <Typography variant="p">Current active projects</Typography>
          </div>
          <div className="mt-4">
            <Typography variant="p">42</Typography>
            <Typography
              variant="p"
              className="text-xs text-muted-foreground mt-1" 
            >
              +3 from last month
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <Typography variant="h3" className="text-lg font-semibold mb-4">
            Recent Activity
          </Typography>
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-2 rounded-md hover:bg-muted"
              >
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  {item}
                </div>
                <div>
                  <Typography variant="p" >Activity Item {item}</Typography>
                  <Typography variant="p" className="text-xs text-muted-foreground mt-1" >2 hours ago</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
