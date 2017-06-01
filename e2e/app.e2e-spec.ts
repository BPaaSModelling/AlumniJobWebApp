import { AlumniJobWebAppPage } from './app.po';

describe('alumni-job-web-app App', () => {
  let page: AlumniJobWebAppPage;

  beforeEach(() => {
    page = new AlumniJobWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
