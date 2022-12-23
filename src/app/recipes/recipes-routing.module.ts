import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeResolverSerivce } from './recipe-resolver.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipeStartComponent,
      },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverSerivce],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverSerivce],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
