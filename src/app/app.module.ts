import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeBoxComponent } from './recipes/recipe-box/recipe-box.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeBoxComponent,
    RecipeItemComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
