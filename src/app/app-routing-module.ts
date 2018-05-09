import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    { path: 'painel', component: DashBoardComponent},
    { path: '', component: UserComponent}
];

@NgModule({
    // imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
