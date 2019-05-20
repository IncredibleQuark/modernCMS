import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule
} from "@angular/material";

@NgModule({
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  exports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatSnackBarModule],

})
export class AppMaterialModule { }

