import { E2eNgupgradePage } from './app.po';

describe('e2e-ngupgrade App', () => {
  let page: E2eNgupgradePage;

  beforeEach(() => {
    page = new E2eNgupgradePage();
  });

  it('should find message from angular', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
