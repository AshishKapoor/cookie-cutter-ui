import "@/assets/styles/globals.css";
import DashboardLayout from "@/components/dashboard-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "@/pages/dashboard";
import NotFound from "@/pages/not-found";
import UserSettingsPage from "@/pages/settings";
import UsersPage from "@/pages/users";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/home" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<UserSettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default App;
