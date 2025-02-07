import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <!-- Hero Section with Gradient -->
      <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-32 overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-3xl">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Innovative Engineering Solutions
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Transforming ideas into reality through cutting-edge technology and expertise.
            </p>
            <a routerLink="/contact" 
               class="inline-flex items-center px-8 py-3 rounded-full bg-white text-primary-600 font-semibold
                      hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Get Started
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Expertise Cards with Hover Effects -->
      <section class="py-24">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-12 text-center text-gray-800">
            Our Expertise
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 
                        transition-all duration-300 border-t-4 border-secondary">
              <div class="mb-6 text-secondary">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-secondary transition-colors">
                Precision Engineering
              </h3>
              <p class="text-gray-600 leading-relaxed">
                We specialize in creating high-precision components for various industries, ensuring exceptional quality and reliability.
              </p>
            </div>

            <div class="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 
                        transition-all duration-300 border-t-4 border-secondary">
              <div class="mb-6 text-secondary">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-secondary transition-colors">
                Innovative Design
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Our team of experts develops cutting-edge solutions to complex problems, pushing the boundaries of innovation.
              </p>
            </div>

            <div class="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 
                        transition-all duration-300 border-t-4 border-secondary">
              <div class="mb-6 text-secondary">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-secondary transition-colors">
                Quality Assurance
              </h3>
              <p class="text-gray-600 leading-relaxed">
                We maintain the highest standards of quality in all our products and services, ensuring customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products with Modern Cards -->
      <section class="bg-white py-24">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-12 text-center text-gray-800">Featured Products</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div class="relative overflow-hidden">
                <img ngSrc="assets/pipe2.png" alt="Advanced Robotics System" 
                     width="400" height="300"
                     class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-secondary transition-colors">
                GmbH - Wesel
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed">
                  State-of-the-art robotics for industrial automation, designed for precision and efficiency.
                </p>
                <a routerLink="/products" 
                   class="inline-flex items-center text-secondary hover:text-primary-700 font-semibold transition-colors">
                  Learn More
                  <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            <div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div class="relative overflow-hidden">
                <img ngSrc="assets/pipes.webp" alt="Smart Sensor Network" 
                     width="400" height="300"
                     class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-secondary transition-colors">
                Galvanised Rectangular Pipes
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed">
                  IoT-enabled sensors for real-time data collection and analysis, empowering smart decisions.
                </p>
                <a routerLink="/products" 
                   class="inline-flex items-center text-secondary hover:text-primary-700 font-semibold transition-colors">
                  Learn More
                  <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            <div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div class="relative overflow-hidden">
                <img ngSrc="assets/pipe3.webp" alt="Eco-Friendly Power Systems" 
                     width="400" height="300"
                     class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-secondary transition-colors">
                Texmopipes
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed">
                  Sustainable energy solutions for a greener future, optimizing efficiency and environmental impact.
                </p>
                <a routerLink="/products" 
                   class="inline-flex items-center text-secondary hover:text-primary-700 font-semibold transition-colors">
                  Learn More
                  <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- CTA Section with Modern Design -->
      <section class="relative bg-gradient-to-r from-secondary to-secondary-dark text-red-300 py-24 overflow-hidden">
        <div class="absolute inset-0 bg-pattern opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p class="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Contact us today to discuss your engineering needs and discover how we can help bring your vision to life.
          </p>
          <a routerLink="/contact" 
             class="inline-flex items-center px-8 py-4 rounded-full bg-white text-secondary font-bold
                    hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Get in Touch
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .bg-grid-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .bg-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slide-up {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }

    .animate-slide-up {
      animation: slide-up 1s ease-out;
    }
  `]
})
export class HomeComponent {}