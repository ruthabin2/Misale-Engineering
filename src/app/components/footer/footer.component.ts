import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="bg-gradient-to-br from-primary-800 to-primary-900 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <!-- Main Content -->
      <div class="container mx-auto px-6 py-16 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <img src="assets/logo.png" alt="Misale Engineering" class="w-12 h-12 object-contain">
              <h5 class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Misale Engineering
              </h5>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Innovative solutions for a better future. Leading the way in engineering excellence since 1985.
            </p>
            <div class="pt-4">
              <a href="#" class="inline-flex items-center text-secondary hover:text-white transition-colors duration-300">
                Learn More
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h5 class="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary transform origin-left scale-x-100"></span>
            </h5>
            <ul class="space-y-3">
              <li *ngFor="let link of quickLinks" 
                  class="transform hover:-translate-x-2 transition-transform duration-300">
                <a [routerLink]="link.path" 
                   class="text-gray-300 hover:text-white flex items-center group">
                  <span class="w-2 h-2 bg-secondary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="space-y-4">
            <h5 class="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary transform origin-left scale-x-100"></span>
            </h5>
            <div class="space-y-4">
              <div class="flex items-start space-x-3 group">
                <svg class="w-6 h-6 text-secondary mt-1 group-hover:animate-bounce" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <p class="text-gray-300 leading-relaxed">
                  123 Engineering St,<br>
                  Tech City, TC 12345
                </p>
              </div>
              <div class="flex items-center space-x-3 group">
                <svg class="w-6 h-6 text-secondary group-hover:animate-bounce" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <p class="text-gray-300">(+251) 911-177087</p>
              </div>
              <div class="flex items-center space-x-3 group">
                <svg class="w-6 h-6 text-secondary group-hover:animate-bounce" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <p class="text-gray-300">info&#64;misaleengineering.com</p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="space-y-4">
            <h5 class="text-xl font-bold mb-6 relative inline-block">
              Connect With Us
              <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary transform origin-left scale-x-100"></span>
            </h5>
            <div class="flex space-x-4">
              <a *ngFor="let social of socialLinks" 
                 [href]="social.url" 
                 class="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center
                        hover:bg-secondary transform hover:-translate-y-1 transition-all duration-300
                        group">
                <i [class]="social.icon + ' text-white text-xl group-hover:scale-125 transition-transform duration-300'"></i>
              </a>
            </div>
            <div class="mt-6">
              <h6 class="text-lg font-semibold mb-3">Newsletter</h6>
              <div class="flex">
                <input type="email" 
                       placeholder="Enter your email" 
                       class="flex-1 px-4 py-2 rounded-l-lg bg-primary-700 text-white placeholder-gray-400
                              border-2 border-primary-600 focus:outline-none focus:border-secondary
                              transition-colors duration-300">
                <button class="px-6 py-2 bg-secondary text-white rounded-r-lg hover:bg-secondary-dark
                             transition-colors duration-300 focus:outline-none focus:ring-2 
                             focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="mt-16 pt-8 border-t border-primary-700">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-center md:text-left">
              &copy; {{ currentYear }} Misale Engineering. All rights reserved.
            </p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a *ngFor="let link of legalLinks" 
                 [routerLink]="link.path" 
                 class="text-gray-400 hover:text-white transition-colors duration-300">
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .bg-grid-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    .animate-bounce {
      animation: bounce 1s ease infinite;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/projects', label: 'Projects' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  socialLinks = [
    { url: '#', icon: 'fab fa-facebook-f' },
    { url: '#', icon: 'fab fa-twitter' },
    { url: '#', icon: 'fab fa-linkedin-in' },
    { url: '#', icon: 'fab fa-instagram' }
  ];

  legalLinks = [
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/cookies', label: 'Cookie Policy' }
  ];
}