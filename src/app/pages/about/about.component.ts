import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24 overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <h1 class="text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
            About Engineering Co.
          </h1>
          <div class="w-24 h-1 bg-secondary mx-auto mb-8 animate-scale"></div>
        </div>
      </section>

      <div class="container mx-auto px-6 py-16">
        <!-- History Section -->
        <section class="mb-16 animate-slide-up">
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <div class="p-3 bg-primary-100 rounded-lg mr-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Our History</h2>
            </div>
            <p class="text-gray-600 leading-relaxed text-lg">
              Founded in 1985, Engineering Co. has been at the forefront of technological innovation for over three decades. 
              Our journey began with a small team of passionate engineers and has grown into a global leader in engineering solutions.
            </p>
          </div>
        </section>

        <!-- Mission & Vision Section -->
        <section class="mb-16 animate-slide-up" style="animation-delay: 200ms;">
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <div class="p-3 bg-primary-100 rounded-lg mr-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Mission & Vision</h2>
            </div>
            <p class="text-gray-600 leading-relaxed text-lg">
              Our mission is to deliver innovative engineering solutions that drive progress and improve lives. 
              We envision a future where technology and sustainability go hand in hand, creating a better world for generations to come.
            </p>
          </div>
        </section>

        <!-- Core Values Section -->
        <section class="mb-16 animate-slide-up" style="animation-delay: 400ms;">
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-8">
              <div class="p-3 bg-primary-100 rounded-lg mr-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Core Values</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="group p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-600">Innovation</h3>
                <p class="text-gray-600">We constantly push the boundaries of what's possible.</p>
              </div>
              <div class="group p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-600">Integrity</h3>
                <p class="text-gray-600">We conduct our business with the highest ethical standards.</p>
              </div>
              <div class="group p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-600">Collaboration</h3>
                <p class="text-gray-600">We believe in the power of teamwork and partnerships.</p>
              </div>
              <div class="group p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-600">Excellence</h3>
                <p class="text-gray-600">We strive for perfection in everything we do.</p>
              </div>
              <div class="group p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-600">Sustainability</h3>
                <p class="text-gray-600">We are committed to environmentally responsible practices.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Leadership Team Section -->
        <section class="mb-16 animate-slide-up" style="animation-delay: 600ms;">
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-8">
              <div class="p-3 bg-primary-100 rounded-lg mr-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Leadership Team</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="group">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img ngSrc="assets/ceo.jpg" alt="CEO" width="400" height="400"
                       class="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">Tamiru Alemayehu</h3>
                <p class="text-gray-600">CEO & Founder</p>
              </div>
              <div class="group">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img ngSrc="assets/cto.png" alt="CTO" width="400" height="400"
                       class="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">Ruth Tamiru</h3>
                <p class="text-gray-600">Chief Technology Officer</p>
              </div>
              <div class="group">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img ngSrc="assets/coo.png" alt="COO" width="400" height="400"
                       class="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">Asnaku Fikadu</h3>
                <p class="text-gray-600">Chief Operations Officer</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Certifications Section -->
        <section class="animate-slide-up" style="animation-delay: 800ms;">
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-8">
              <div class="p-3 bg-primary-100 rounded-lg mr-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Certifications & Achievements</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="group p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-600">ISO 9001:2015 Certified</h3>
                <p class="text-gray-600">Our quality management system meets international standards, ensuring consistent quality in all our operations.</p>
              </div>
              <div class="group p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-600">Industry Innovation Award 2022</h3>
                <p class="text-gray-600">Recognized for our groundbreaking work in sustainable engineering and technological advancement.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .bg-grid-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slide-up {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @keyframes scale {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }

    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }

    .animate-slide-up {
      animation: slide-up 1s ease-out;
    }

    .animate-scale {
      animation: scale 1s ease-out;
      transform-origin: center;
    }
  `]
})
export class AboutComponent {}