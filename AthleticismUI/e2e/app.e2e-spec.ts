import { AthleticismUIPage } from './app.po';

describe('athleticism-ui App', () => {
  let page: AthleticismUIPage;

  beforeEach(() => {
    page = new AthleticismUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
