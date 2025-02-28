import { Developer } from './developer';

describe('Developer', () => {
  it('should create an instance', () => {
    expect(new Developer(0, "", "", "", 0)).toBeTruthy();
  });
});
