declare module "glider-js" {
  export default class Glider {
    constructor(
      element: HTMLElement,
      options?: {
        slidesToShow?: number | "auto";
        slidesToScroll?: number;
        itemWidth?: number;
        exactWidth?: boolean;
        duration?: number;
        dots?: string | HTMLElement;
        arrows?: { prev: string | HTMLElement; next: string | HTMLElement };
        draggable?: boolean;
        scrollLock?: boolean;
        rewind?: boolean;
        responsive?: { breakpoint: number; settings: object }[];
      }
    );
  }
}
