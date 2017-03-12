import { ClarialphaWebPage } from './app.po';

describe('clarialpha-web App', () => {
  let page: ClarialphaWebPage;

  beforeEach(() => {
    page = new ClarialphaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
