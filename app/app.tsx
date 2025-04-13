import "@/assets/styles/globals.css";
import DashboardLayout from "@/components/dashboard-layout";
import { ThemeProvider } from "@/components/theme-provider";
import DashboardPage from "@/pages/dashboard";
import NotFound from "@/pages/not-found";
import UserSettingsPage from "@/pages/settings";
import UsersPage from "@/pages/users";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthenticationPage from "@/pages/authentication";
import { LoginPage } from "@/pages/login";

function App() {
  const location = useLocation();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/home" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/settings" element={<UserSettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DashboardLayout>
      )}
      {location.pathname === "/register" && (
        <div className="flex items-center justify-center h-screen bg-background">
          <AuthenticationPage />
        </div>
      )}
      {location.pathname === "/login" && (
        <div className="flex items-center justify-center h-screen bg-background">
          <LoginPage />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
