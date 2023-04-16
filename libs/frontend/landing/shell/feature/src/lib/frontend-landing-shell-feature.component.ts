import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'meet-frontend-landing-shell-feature',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>frontend-landing-shell-feature works!</p>
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendLandingShellFeatureComponent {}
