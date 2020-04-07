import { cirilomoneyUiPage } from './app.po';

describe('cirilomoney-ui App', () => {
  let page: cirilomoneyUiPage;

  beforeEach(() => {
    page = new cirilomoneyUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
