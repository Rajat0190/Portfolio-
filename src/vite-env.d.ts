/// <reference types="vite/client" />

declare module "gsap/SplitText" {
  const SplitText: any;
  export { SplitText };
  export default SplitText;
}

declare module "gsap/ScrollSmoother" {
  const ScrollSmoother: any;
  export { ScrollSmoother };
  export default ScrollSmoother;
}

declare module "gsap/*" {
  const content: any;
  export default content;
}
