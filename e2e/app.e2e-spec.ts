import { SquadPage } from './app.po';

describe('squad App', () => {
  let page: SquadPage;

  beforeEach(() => {
    page = new SquadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
