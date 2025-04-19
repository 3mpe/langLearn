import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() breadcrumbs: { label: string; url: string }[] = [];
  @Input() showBackButton: boolean = false;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
