import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sidebar } from './models/Sidebar';

@Component({
  selector: 'ocean-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() config: Sidebar | null = null;
  @Output() clickAction: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onClickAction(title: string): void {
    this.clickAction.emit(title);
  }
}
