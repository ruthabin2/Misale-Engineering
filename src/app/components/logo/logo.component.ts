import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

@Component({
  selector: "app-logo",
  standalone: true,
  imports:[CommonModule],
  template: `
    <div class="logo-container" [style.width]="size">
      <div class="logo" [style.width]="size" [style.height]="size">
        <div class="gear"></div>
        <div class="text">ME</div>
      </div>
      <div class="tagline" *ngIf="showTagline">Being Example</div>
    </div>
  `,
  styles: [
    `
    .logo-container {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
    }
    .logo {
      position: relative;
      display: inline-block;
    }
    .gear {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 6px solid var(--color-primary);
      border-radius: 50%;
      animation: spin 10s linear infinite;
    }
    .gear::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      height: 70%;
      background-color: white;
      border-radius: 50%;
    }
    .gear::after {
      content: '';
      position: absolute;
      top: -6px;
      left: calc(50% - 6px);
      width: 12px;
      height: 25%;
      background-color: var(--color-primary);
      box-shadow: 0 calc(75% + 6px) 0 0 var(--color-primary),
                  calc(75% + 6px) 0 0 0 var(--color-primary),
                  calc(-75% - 6px) 0 0 0 var(--color-primary);
    }
    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40%;
      font-weight: bold;
      color: var(--color-secondary);
    }
    .tagline {
      font-size: 12px;
      color: var(--color-primary);
      margin-top: 4px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,
  ],
})
export class LogoComponent {
  @Input() size = "50px"
  @Input() showTagline = true
}

