import { print } from '../src/index';

describe('测试 print 方法', () => {
  test('执行后应该返回 cli-rollup', () => {
    const result = 'cli-rollup'
    expect(print()).toBe(result);
  });
})