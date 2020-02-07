import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects'

import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { environment } from 'src/environments/environment';
import { PostListService } from './post-list/post-list.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { PostsEffects } from './store/post.effect';
import { reducers } from './utils/reducers';

import { MatToolbarModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Flex Layout Dependency
    FlexLayoutModule,

    // Firebase dependencies + inisialization
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    // Store Configuration
    StoreModule.forRoot( reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PostsEffects]),

    //Angular Material imports
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    PostListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
