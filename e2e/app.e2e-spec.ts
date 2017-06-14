import { Taxi4funPage } from './app.po';

describe('taxi4fun App', () => {
  let page: Taxi4funPage;

  beforeEach(() => {
    page = new Taxi4funPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
