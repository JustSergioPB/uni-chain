import { SidebarElement } from './SidebarElement';

export interface SidebarSection {
  icon?: string;
  title: string;
  children: SidebarElement[];
}
