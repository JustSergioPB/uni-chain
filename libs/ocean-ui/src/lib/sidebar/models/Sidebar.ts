import { SidebarStyle } from '../enums/SidebarStyles';
import { SidebarType } from '../enums/SidebarTypes';
import { SidebarSection } from './SidebarSection';

export interface Sidebar {
  logo: string;
  banner: string;
  type: SidebarType;
  style?: SidebarStyle;
  sections: SidebarSection[];
}
