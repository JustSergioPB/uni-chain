import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarStyle } from './enums/SidebarStyles';
import { SidebarType } from './enums/SidebarTypes';
import { Sidebar } from './models/Sidebar';

const defaultConfig: Sidebar = {
  logo: '../../../assets/icons/wave',
  banner: 'Ocean ui',
  style: SidebarStyle.secondary,
  type: SidebarType.compact,
  sections: [],
};
@Component({
  selector: 'ocean-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() config: Sidebar;
  @Output() clickAction: EventEmitter<string> = new EventEmitter<string>();
  public style: string;
  public type: string;
  constructor() {}
  ngOnInit(): void {
    this.config = defaultConfig;
    this.style = SidebarStyle[this.config.style ?? 0];
    this.type = SidebarType[this.config.type];
  }

  onClickAction(title: string): void {
    this.clickAction.emit(title);
  }
}
