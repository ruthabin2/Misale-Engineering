import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24 overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <h1 class="text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
            Our Products
          </h1>
          <p class="text-xl text-center text-gray-100 max-w-3xl mx-auto mb-8 animate-slide-up">
            Discover our innovative solutions designed to transform industries and drive progress
          </p>
          <div class="w-24 h-1 bg-secondary mx-auto animate-scale"></div>
        </div>
      </section>

      <!-- Products Grid -->
      <section class="py-24">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Advanced Robotics System -->
            <div class="group animate-slide-up" style="animation-delay: 200ms;">
              <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 
                          hover:shadow-2xl hover:-translate-y-2">
                <div class="relative overflow-hidden">
                  <img ngSrc="assets/pipe2.png" alt="Advanced Robotics System" 
                       width="600" height="400"
                       class="w-full h-64 object-cover transform transition-transform duration-500 
                              group-hover:scale-110">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="p-8">
                  <div class="flex items-center mb-4">
                    <div class="p-2 bg-primary-100 rounded-lg mr-3">
                      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800">GmbH - Wesel</h2>
                  </div>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    State-of-the-art robotics for industrial automation, improving efficiency and precision in manufacturing processes.
                  </p>
                  <div class="space-y-4">
                    <div class="flex items-center text-gray-700">
                      <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>High precision control</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                      <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>AI-powered automation</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                      <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>24/7 operation capability</span>
                    </div>
                  </div>
                  <button class="mt-8 w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-semibold
                                hover:bg-primary-700 transform hover:scale-[1.02] transition-all duration-300
                                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <!-- Smart Sensor Network -->
            <div class="group animate-slide-up" style="animation-delay: 400ms;">
              <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 
                          hover:shadow-2xl hover:-translate-y-2">
                <div class="relative overflow-hidden">
                  <img ngSrc="assets/pipes.webp" alt="Smart Sensor Network" 
                       width="600" height="400"
                       class="w-full h-64 object-cover transform transition-transform duration-500 
                              group-hover:scale-110">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="p-8">
                  <div class="flex items-center mb-4">
                    <div class="p-2 bg-primary-100 rounded-lg mr-3">
                      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                      </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800">Galvanised Rectangular Pipes</h2>
                  </div>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    IoT-enabled sensors for real-time data collection and analysis, providing valuable insights for various industries.
                  </p>
                  <div class="space-y-4">
                    <div class="flex items-center text-gray-700">
                      <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>Real-time monitoring</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                      <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>Advanced analytics</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                      <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>Cloud integration</span>
                    </div>
                  </div>
                  <button class="mt-8 w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-semibold
                                hover:bg-primary-700 transform hover:scale-[1.02] transition-all duration-300
                                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <!-- Eco-Friendly Power Systems -->
            <div class="group animate-slide-up" style="animation-delay: 600ms;">
              <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 
                          hover:shadow-2xl hover:-translate-y-2">
                <div class="relative overflow-hidden">
                  <img ngSrc="assets/pipe3.webp" alt="Eco-Friendly Power Systems" 
                       width="600" height="400"
                       class="w-full h-64 object-cover transform transition-transform duration-500 
                              group-hover:scale-110">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="p-8">
                  <div class="flex items-center mb-4">
                    <div class="p-2 bg-primary-100 rounded-lg mr-3">
                      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800">Texmopipes</h2>
                  </div>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    Sustainable energy solutions for a greener future, including solar and wind power technologies.
                  </p>
                  <div class="space-y-4">
                    <div class="flex items-center text-gray-700">
                      <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>100% renewable energy</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                      <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>Smart grid compatible</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                      <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>Energy storage solutions</span>
                    </div>
                  </div>
                  <button class="mt-8 w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-semibold
                                hover:bg-primary-700 transform hover:scale-[1.02] transition-all duration-300
                                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
export class ProductsComponent {}