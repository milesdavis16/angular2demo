import { ChartdemoPage } from './app.po';

describe('chartdemo App', function() {
  let page: ChartdemoPage;

  beforeEach(() => {
    page = new ChartdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
