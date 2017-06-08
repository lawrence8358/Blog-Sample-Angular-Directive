import { BlogSampleAngularDirectivePage } from './app.po';

describe('blog-sample-angular-directive App', () => {
  let page: BlogSampleAngularDirectivePage;

  beforeEach(() => {
    page = new BlogSampleAngularDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
