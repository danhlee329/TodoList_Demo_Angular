//Ref: https://angular.io/docs/ts/latest/guide/ngmodule.html
/* 
    Dynamic option (Just-in-time (JiT) compiler (Angular compiler) 
    compiles the application in the browser and then launches the app.) 
*/
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);

/* 
    Static option - Consider the static alternative which can produce a much smaller 
    application that launches faster, especially on mobile devices and high latency networks. 
*/
// // The browser platform without a compiler
// import { platformBrowser } from '@angular/platform-browser';

// // The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from './app.module.ngfactory';

// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);