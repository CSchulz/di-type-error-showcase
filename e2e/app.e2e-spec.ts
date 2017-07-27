import { BundleOrderShowcasePage } from './app.po';

describe('bundle-order-showcase App', () => {
  let page: BundleOrderShowcasePage;

  beforeEach(() => {
    page = new BundleOrderShowcasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
