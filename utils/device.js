const MobileDetect = require('mobile-detect');
const { Responsive } = require('semantic-ui-react');

const isMobileSSR = (req) => {
    const md = new MobileDetect(req.headers["user-agent"]);
    console.log(md);
    return !!md.mobile();
}

const getWidthFactory = (isMobileFromSSR) => () => {
    const isSSR = typeof window === "undefined";
    const ssrValue = isMobileFromSSR
      ? Responsive.onlyMobile.maxWidth
      : Responsive.onlyTablet.minWidth;
    return isSSR ? ssrValue : window.innerWidth;
};

 export { isMobileSSR, getWidthFactory };
