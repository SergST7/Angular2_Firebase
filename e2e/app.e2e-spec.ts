import { PropListingFirebasePage } from './app.po';

describe('prop-listing-firebase App', function() {
  let page: PropListingFirebasePage;

  beforeEach(() => {
    page = new PropListingFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
