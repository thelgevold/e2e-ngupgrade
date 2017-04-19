import { browser, element, by } from 'protractor';

export class E2eNgupgradePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
