import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './ui/macro/login/login.component';
import { DashboardLayoutComponent } from './ui/layout/dashboard-layout/dashboard-layout.component';

const appRoutes: Routes = [
    { path: 'painel', component: DashboardLayoutComponent},
    { path: '', component: LoginComponent}
];

@NgModule({
    // imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
