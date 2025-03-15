import type React from "react"
import type { Metadata } from "next"
import { SidebarNav } from "@/components/sidebar-nav"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Monitor your cognitive health progress",
}

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: "layout",
  },
  {
    title: "Cognitive Tests",
    href: "/cognitive-test",
    icon: "brain",
  },
  {
    title: "Brain Gym",
    href: "/brain-gym",
    icon: "dumbbell",
  },
  {
    title: "Progress Report",
    href: "/progress",
    icon: "line-chart",
  },
  {
    title: "Resources",
    href: "/resources",
    icon: "book",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "settings",
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Dashboard</h2>
            <SidebarNav items={sidebarNavItems} />
          </div>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

