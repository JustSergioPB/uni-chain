import { SidebarElementType } from '../enums/SidebarElementTypes';

export interface SidebarElement {
  icon: string;
  title: string;
  type: SidebarElementType;
}
