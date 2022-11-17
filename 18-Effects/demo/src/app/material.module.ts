import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTableModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTableModule,
        MatDialogModule
    ]
})
export class MaterialModule{}