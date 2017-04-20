import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare var angular:any;

angular.module('angular-legacy').directive('appComponent', downgradeComponent({component: AppComponent}));

platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => {
  const adapter = ref.injector.get(UpgradeModule) as UpgradeModule;
  adapter.bootstrap(document.body, ['angular-legacy']);
})
