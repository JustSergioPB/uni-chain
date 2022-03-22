import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AlertComponent } from './alert/alert.component';
import { DialogComponent } from './dialog/dialog.component';
import { TabsComponent } from './tabs/tabs.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SidebarComponent,
    TableComponent,
    SelectComponent,
    InputComponent,
    DatepickerComponent,
    AlertComponent,
    DialogComponent,
    TabsComponent,
    MenuComponent
  ],
})
export class OceanUiModule {}
