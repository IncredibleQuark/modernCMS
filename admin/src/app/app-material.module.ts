import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";

@NgModule({
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  exports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule],

})
export class AppMaterialModule { }

