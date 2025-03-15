import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/session"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { EmptyPlaceholder } from "@/components/dashboard/empty-placeholder"
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs"
import { UserRole } from "@/types"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your cognitive health journey",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  // Redirect to role-specific dashboard
  if (user.role === UserRole.PATIENT) {
    redirect("/dashboard/patient")
  } else if (user.role === UserRole.CAREGIVER) {
    redirect("/dashboard/caregiver")
  } else if (user.role === UserRole.DOCTOR) {
    redirect("/dashboard/doctor")
  } else if (user.role === UserRole.ADMIN) {
    redirect("/dashboard/admin")
  }

  // Fallback dashboard for unknown roles
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Manage your account and settings.">
        <Button>Refresh</Button>
      </DashboardHeader>
      <div className="grid gap-8">
        <DashboardTabs />
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No dashboard available</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don't have access to any dashboard. Please contact support.
          </EmptyPlaceholder.Description>
          <Button variant="outline" className="mt-4">
            Contact Support
          </Button>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}

