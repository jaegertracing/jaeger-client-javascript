import Utils from '../src/util';

describe('Utils tests', () => {
  describe('startsWith function', () => {
    test('should return true if text start with defined prefix', () => (expect(Utils.startsWith('prefixAndString', 'prefix')).toBeTruthy()));

    test('should return false if text did not start with defined prefix', () => (expect(Utils.startsWith('stringWithprefixAndString', 'prefix')).toBeFalsy()));
  });

  describe('endsWith function', () => {
    test('should return true if text start with defined prefix', () => (expect(Utils.endsWith('stringWithSuffix', 'Suffix')).toBeTruthy()));

    test('should return false if text did not start with defined prefix', () => (expect(Utils.endsWith('stringWithoutSuffixString', 'Suffix')).toBeFalsy()));
  });
});
