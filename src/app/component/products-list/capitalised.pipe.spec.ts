import { CapitalisedPipe } from './capitalised.pipe';

describe('CapitalisedPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalisedPipe();
    expect(pipe).toBeTruthy();
  });
});
