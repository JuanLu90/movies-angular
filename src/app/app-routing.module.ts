import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'form', component: FormComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
