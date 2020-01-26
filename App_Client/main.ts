import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SVMModule } from './svm/svm.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(SVMModule);