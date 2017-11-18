import { BlogTitlePipe } from './blog-title.pipe';

describe('BlogTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new BlogTitlePipe();
    expect(pipe).toBeTruthy();
  });
});
