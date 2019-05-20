import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from "./components/common/page-not-found/page-not-found.component";
import {InstallationComponent} from "./components/admin/installation/installation.component";
import {MainComponent} from "./components/main/main.component";
import {AuthGuard} from "./guards/auth.guard";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {AuthComponent} from "./components/admin/auth/auth.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    },
    {
        path: 'admin/installation',
        component: InstallationComponent,
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full'
    },
    {
        path: 'admin/login',
        component: AuthComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
