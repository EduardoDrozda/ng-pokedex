import { animate, style, transition, trigger } from '@angular/animations';

export abstract class AnimationUtils {
  static fadeAnimation() {
    return [
      trigger('enterAnimation', [
        transition('* => *', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate(
            '0.4s ease-out',
            style({ transform: 'translateX(0)', opacity: 1 })
          ),
        ]),
      ]),
    ];
  }
}
