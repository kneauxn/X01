import { X01Page } from './app.po';

describe('x01 App', function() {
  let page: X01Page;

  beforeEach(() => {
    page = new X01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
