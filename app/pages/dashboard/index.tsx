"use client";

import Typography from "@/components/ui/typography";

const DashboardPage = () => {
  return (
    <div className="p-6">
      <Typography variant="h2" className="mb-4">
        Dashboard
      </Typography>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex flex-col space-y-2">
            <Typography variant="h3" className="text-xl font-bold">
              Total Users
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Your total user count
            </Typography>
          </div>
          <div className="mt-6">
            <Typography variant="p" className="text-3xl font-bold">
              1,234
            </Typography>
            <Typography
              variant="p"
              className="text-sm text-emerald-600 mt-2 flex items-center"
            >
              +12% from last month
            </Typography>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex flex-col space-y-2">
            <Typography variant="h3" className="text-xl font-bold">
              Revenue
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Monthly revenue
            </Typography>
          </div>
          <div className="mt-6">
            <Typography variant="p" className="text-3xl font-bold">
              $12,345
            </Typography>
            <Typography
              variant="p"
              className="text-sm text-emerald-600 mt-2 flex items-center"
            >
              +8% from last month
            </Typography>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex flex-col space-y-2">
            <Typography variant="h3" className="text-xl font-bold">
              Active Projects
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Current active projects
            </Typography>
          </div>
          <div className="mt-6">
            <Typography variant="p" className="text-3xl font-bold">
              42
            </Typography>
            <Typography
              variant="p"
              className="text-sm text-emerald-600 mt-2 flex items-center"
            >
              +3 from last month
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-xl border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <Typography variant="h3" className="text-xl font-bold mb-6">
        Recent Activity
          </Typography>
          <div className="space-y-6">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="flex items-center gap-6 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold shadow-sm">
          {item}
            </div>
            <div className="space-y-1">
          <Typography variant="p" className="font-medium">
            Activity Item {item}
          </Typography>
          <Typography
            variant="p"
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            2 hours ago
          </Typography>
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
