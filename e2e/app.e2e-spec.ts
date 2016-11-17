import { NagamoltenSitePage } from './app.po';

describe('nagamolten-site App', function() {
  let page: NagamoltenSitePage;

  beforeEach(() => {
    page = new NagamoltenSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
