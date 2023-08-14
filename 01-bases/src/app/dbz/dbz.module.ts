import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [MainPageComponent],
})
export class DBZModule {}
