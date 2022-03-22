import { SidebarType } from '../enums/SidebarTypes';
import { SidebarSection } from './SidebarSection';

export interface Sidebar {
  logo: string;
  banner: string;
  type: SidebarType;
  sections: SidebarSection[];
}
