export {};

declare global {
  interface Window {
    puter?: {
      ai?: {
        chat?: (...args: any[]) => Promise<any>;
        // add more methods as you use them
      };
    };
  }
}