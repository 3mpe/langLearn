import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() breadcrumbs: { label: string; url: string }[] = [];
  @Input() showBackButton: boolean = false;
  @Input() showLogoutButton: boolean = false;

  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/auth/login']);
  }
}
