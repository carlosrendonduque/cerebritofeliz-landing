// ============================================
// src/utils/analytics.ts
// ============================================
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // TODO: Implement analytics tracking
    console.log('Analytics Event:', eventName, properties);
  };
  
  export const trackPageView = (pageName: string) => {
    trackEvent('page_view', { page: pageName });
  };