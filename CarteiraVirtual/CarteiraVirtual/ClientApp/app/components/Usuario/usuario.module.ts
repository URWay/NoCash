import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario.component';

const routes: Routes = [

]

@NgModule({
    declarations: [
        UsuarioComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'usuario', component: UsuarioComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    exports: [
        UsuarioComponent
    ],
    providers: []
})

export class UsuarioModule { }