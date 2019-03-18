import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { NewsComponent } from './news/news.component';
import { DropsComponent } from './drops/drops.component';
import { UpcominginfoComponent } from './drops.upcoming.info/upcominginfo.component';
import { ReleasedComponent } from './drops.released/released.component';
import { ProxyComponent } from './proxy/proxy.component';
import { ProxypaymentComponent } from './proxypayment/proxypayment.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'news', component: NewsComponent},
  { path: 'drops', component: DropsComponent},
  { path: 'upcominginfo', component: UpcominginfoComponent},
  { path: 'released', component: ReleasedComponent},
  { path: 'proxy', component: ProxyComponent},
  { path: 'proxypayment', component: ProxypaymentComponent},
  { path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    DropsComponent,
    UpcominginfoComponent,
    ReleasedComponent,
    ProxyComponent,
    ProxypaymentComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
