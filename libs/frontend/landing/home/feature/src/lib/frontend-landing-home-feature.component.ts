import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'meet-frontend-landing-home-feature',
  standalone: true,
  imports: [CommonModule],
  template: `<p>frontend-landing-home-feature works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendLandingHomeFeatureComponent {}
