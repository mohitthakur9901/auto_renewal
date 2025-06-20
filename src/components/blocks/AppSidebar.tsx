import React from 'react'
import { ChartArea, SquareUser, Plus, ChevronRight, Settings, CircleUser, Mail, MessageCircle, User } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from 'next/link'
import { PATH_DASHBOARD } from '@/routes'
import { Logo } from '../logo'
import { IsAdmin } from '@/app/actions/admin'
async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const isAdmin = await IsAdmin();

  const routes = [
    {
      title: 'Admin',
      items: [
        { title: 'Admin', path: PATH_DASHBOARD.admin.root, icon: User },
        { title: 'Users', path: PATH_DASHBOARD.admin.users, icon: User },
        { title: 'Members', path: PATH_DASHBOARD.admin.members, icon: SquareUser },
        { title: 'Subscriptions', path: PATH_DASHBOARD.admin.subscriptions, icon: ChartArea },
        { title: 'Services', path: PATH_DASHBOARD.admin.services, icon: Mail },
      ]
    },
    {
      title: 'Dashboard',
      items: [
        { title: 'Analytics', path: PATH_DASHBOARD.analytics, icon: ChartArea },
      ]
    },
    {
      title: 'Members',
      items: [
        { title: 'All Members', path: PATH_DASHBOARD.members.list, icon: SquareUser },
        { title: 'New Member', path: PATH_DASHBOARD.members.new, icon: Plus },
      ]
    },
    {
      title: 'Services',
      items: [
        { title: 'Email Service', path: PATH_DASHBOARD.services.email, icon: Mail },
        { title: 'Whatsapp Service', path: PATH_DASHBOARD.services.whatsapp, icon: MessageCircle },
      ]
    },
    {
      title: 'Account',

      items: [
        {
          title: "Profile",
          path: PATH_DASHBOARD.account.root,
          icon: CircleUser
        },
        {
          title: 'Settings',
          path: PATH_DASHBOARD.account.settings,
          icon: Settings
        }
      ]
    }

  ].filter(Boolean)



  return (
    <Sidebar>
      <SidebarHeader>
        <Link href={PATH_DASHBOARD.analytics}>
          <Logo className='h-10' />
        </Link>
      </SidebarHeader>
      <SidebarContent className="gap-0">
          {routes.map((group) => (
            <Collapsible
              key={group.title}
              defaultOpen
              className="group/collapsible"
            >
              <SidebarGroup>
                <SidebarGroupLabel
                  asChild
                  className="group/label text-sm hover:bg-muted px-3 py-2 cursor-pointer flex items-center"
                >
                  <CollapsibleTrigger className="flex items-center w-full">
                    <span>{group.title}</span>
                    <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => (
                        <SidebarMenuItem key={item.title}>

                          <Link href={item.path} passHref>
                            <SidebarMenuButton asChild>
                              <div className="flex items-center gap-2">
                                <item.icon className="w-4 h-4" />
                                <span>{item.title}</span>
                              </div>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
              <Separator className="my-1" />
            </Collapsible>
          ))}
      </SidebarContent>

      <SidebarFooter >
        {/* Membership plan */}
        <span>Content</span>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar