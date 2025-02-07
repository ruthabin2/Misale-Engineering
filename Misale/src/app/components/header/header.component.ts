import { animate, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, HostListener, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300" 
            [class.shadow-lg]="scrolled" 
            #header>
      <nav class="container mx-auto px-6 py-2">
        <div class="flex justify-between items-center">
          <!-- Logo Section -->
          <div class="flex items-center group">
            <div class="relative overflow-hidden">
              <img src="assets/logo.png" 
                   alt="Misale Engineering Logo" 
                   class="w-32 h-32 object-contain transform transition-transform duration-500 group-hover:scale-110"
                   [class.animate-spin-slow]="isLogoAnimating"
                   (mouseenter)="triggerLogoAnimation()">
              <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div class="ml-4">
              <h1 class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 
                         bg-clip-text text-transparent transform transition-all duration-300 
                         group-hover:scale-105">
                Misale Engineering
              </h1>
              <p class="text-base text-gray-600 opacity-0 group-hover:opacity-100 
                        transition-all duration-300 transform translate-y-2 
                        group-hover:translate-y-0">
                Innovation Through Engineering
              </p>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-2">
            <ng-container *ngFor="let link of navigationLinks">
              <a [routerLink]="link.path" 
                 routerLinkActive="text-primary-600 bg-primary-50" 
                 [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                 class="px-4 py-3 rounded-lg text-gray-600 font-medium transition-all duration-300
                        hover:text-primary-600 hover:bg-primary-50 relative overflow-hidden
                        group">
                {{ link.label }}
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform scale-x-0 
                           group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </ng-container>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  (click)="toggleMobileMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden" 
             [class.hidden]="!isMobileMenuOpen"
             @slideInOut>
          <div class="py-2 space-y-1">
            <ng-container *ngFor="let link of navigationLinks">
              <a [routerLink]="link.path"
                 routerLinkActive="text-primary-600 bg-primary-50"
                 [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                 class="block px-4 py-2 text-gray-600 rounded-lg hover:text-primary-600 
                        hover:bg-primary-50 transition-colors duration-200"
                 (click)="isMobileMenuOpen = false">
                {{ link.label }}
              </a>
            </ng-container>
          </div>
        </div>
      </nav>
    </header>
    <!-- Spacer to prevent content from hiding behind fixed header -->
    <div class="h-36"></div>
  `,
  styles: [`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .animate-spin-slow {
      animation: spin-slow 3s linear;
    }

    :host {
      display: block;
    }
  `],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-10%)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-10%)', opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  scrolled = false;
  isMobileMenuOpen = false;
  isLogoAnimating = false;

  navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/projects', label: 'Projects' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  triggerLogoAnimation() {
    if (!this.isLogoAnimating) {
      this.isLogoAnimating = true;
      setTimeout(() => {
        this.isLogoAnimating = false;
      }, 3000);
    }
  }

  ngOnInit() {
    // Initialize any necessary setup
  }
}