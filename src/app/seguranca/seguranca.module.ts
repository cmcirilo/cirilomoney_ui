import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { environment } from '../../environments/environment';
import { AuthGuard } from './auth.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutService } from './logout.service';
import { MoneyHttpInterceptor } from './money-http-interceptor';
import { SegurancaRoutingModule } from './seguranca-routing.module';




export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains,
        disallowedRoutes: environment.tokenDisallowedRoutes
      }
    }),

    SegurancaRoutingModule
  ],
  declarations: [LoginFormComponent],
  providers: [
    JwtHelperService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoneyHttpInterceptor,
      multi: true
    },
    AuthGuard,
    LogoutService
  ]
})
export class SegurancaModule { }
