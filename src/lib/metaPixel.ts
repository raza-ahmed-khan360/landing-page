import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true,
  debug: false,
};

export const initMetaPixel = (pixelId: string) => {
  ReactPixel.init(pixelId, undefined, options);
};

export const trackPageView = () => {
  ReactPixel.pageView();
};

export const trackEvent = (event: string) => {
  ReactPixel.track(event);
};
