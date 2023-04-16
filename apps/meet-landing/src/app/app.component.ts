import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontendLandingShellFeatureComponent } from '@meet/frontend/landing/shell/feature';

@Component({
  standalone: true,
  imports: [RouterModule, FrontendLandingShellFeatureComponent],
  selector: 'meet-root',
  template: `
    <meet-frontend-landing-shell-feature>
      <router-outlet />
    </meet-frontend-landing-shell-feature>
  `,
})
export class AppComponent {}
