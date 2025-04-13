"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home, Settings, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
interface SidebarProps {
  expanded: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ expanded, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  return (
    <div
      className={`hidden md:flex h-full flex-col border-r bg-background transition-all duration-300 ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <img
            src="/images/logo/logo.webp"
            alt="Logo"
            className={`h-6 w-6 rounded-full transition-all duration-300 ${
              expanded ? "block" : "hidden"
            }`}
          />
          {expanded && <span>Sannty</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8"
        >
          {expanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Module 1 */}
      <div className="p-4">
        {expanded && (
          <h3 className="mb-2 text-xs font-semibold text-muted-foreground">
            MAIN MENU
          </h3>
        )}
        <nav className="space-y-1">
          <Link
            to="/home"
            className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
              location.pathname === "/home"
                ? "bg-muted text-primary-background"
                : "hover:bg-muted"
            } ${expanded ? "gap-3" : "justify-center"}`}
          >
            <Home className="h-4 w-4" />
            {expanded && <span>Dashboard</span>}
          </Link>
          <Link
            to="/users"
            className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
              location.pathname === "/users"
                ? "bg-muted text-primary-background"
                : "hover:bg-muted"
            } ${expanded ? "gap-3" : "justify-center"}`}
          >
            <Users className="h-4 w-4" />
            {expanded && <span>Users</span>}
          </Link>
        </nav>
      </div>

      {/* Module 2 */}
      <div className="p-4">
        {expanded && (
          <h3 className="mb-2 text-xs font-semibold text-muted-foreground">
            SETTINGS
          </h3>
        )}
        <nav className="space-y-1">
          <Link
            to="/settings"
            className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
              location.pathname === "/settings"
                ? "bg-muted text-primary-background"
                : "hover:bg-muted"
            } ${expanded ? "gap-3" : "justify-center"}`}
          >
            <Settings className="h-4 w-4" />
            {expanded && <span>Profile</span>}
          </Link>
        </nav>
      </div>

      <div className="mt-auto p-4 border-t">
        {expanded && (
          <div className="text-xs text-muted-foreground">
            <p>© 2025 Sannty.</p>
            <p>All rights reserved</p>
          </div>
        )}
      </div>
    </div>
  );
}
