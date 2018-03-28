// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyB0j9oQFPi_LP-EO583jO7gPOzpiNp3sQw",
    authDomain: "angular-firebase-photo-gallery.firebaseapp.com",
    databaseURL: "https://angular-firebase-photo-gallery.firebaseio.com",
    projectId: "angular-firebase-photo-gallery",
    storageBucket: "angular-firebase-photo-gallery.appspot.com",
    messagingSenderId: "660476052561"
  }
};
