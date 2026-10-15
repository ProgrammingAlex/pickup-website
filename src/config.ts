// ============================================
// STORE LINKS
// Every download button, the QR code and the /get page read from here.
// ============================================

// iPhone — no storefront in the path, so Canadian visitors land in the
// Canadian App Store and US visitors in the US one.
export const APP_STORE_URL = 'https://apps.apple.com/app/id6785659924';

// Android — leave EMPTY while the app is in closed testing. Android visitors
// are sent to the test-invite form on the homepage instead.
// When the app goes public on Google Play, paste the listing URL here, e.g.
// 'https://play.google.com/store/apps/details?id=YOUR.APPLICATION.ID'
// (use the applicationId from android/app/build.gradle).
// That one change updates the buttons, the /get redirect and every QR code.
export const PLAY_STORE_URL = '';

// The link inside the QR code (website, in-app Settings, posters, cards).
// It never changes — /get decides where to send each phone.
export const GET_URL = 'https://pickuphq.app/get';

// Where Android visitors go until PLAY_STORE_URL is filled in.
export const ANDROID_FALLBACK = '/#android';
