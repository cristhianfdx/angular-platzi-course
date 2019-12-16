import { FibonacciPipe } from './fibonacci.pipe';

xdescribe('FibonacciPipe', () => {
  it('create an instance', () => {
    const pipe = new FibonacciPipe();
    expect(pipe).toBeTruthy();
  });
});
