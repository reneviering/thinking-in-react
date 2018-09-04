import reducer from './index';

describe('reducer', () => {
  it('returns the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      searchTerm: ''
    })
  });

  it('handles SEARCHTERM_CHANGED', () => {
    const state = {
      searchTerm: ''
    };

    Object.freeze(state);

    expect(
      reducer(state, {
        type: 'SEARCHTERM_CHANGED',
        searchTerm: 'foo'
      })
    ).toEqual({
      searchTerm: 'foo'
    })
  });
});
