import { Stack } from "@chakra-ui/layout";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <Stack spacing="4" mt="8" align="stretch">
          <NavLink href="/dashboard" icon={RiDashboardLine}>
            Dashboard
          </NavLink>
          <NavLink href="/users" icon={RiContactsLine}>
            Users
          </NavLink>
        </Stack>
      </NavSection>
      <NavSection title="AUTOMATION">
        <Stack spacing="4" mt="8" align="stretch">
          <NavLink href="/forms" icon={RiInputMethodLine}>
            Forms
          </NavLink>
          <NavLink href="/automation" icon={RiGitMergeLine}>
            Automation
          </NavLink>
        </Stack>
      </NavSection>
    </Stack>
  );
}
