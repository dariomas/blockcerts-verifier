import getSupportedLanguages from '../../../src/i18n/getSupportedLanguages';

describe('domain i18n getSupportedLanguages use case test suite', () => {
  const assertionSupportedLanguages = ['en', 'fr'];

  it('should return an array of supported languages', () => {
    const res = getSupportedLanguages();
    expect(res).toEqual(assertionSupportedLanguages);
  });
});
