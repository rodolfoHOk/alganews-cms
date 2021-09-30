import '@testing-library/react';
import store from '../core/store';
import { fetchPosts } from '../core/store/Post.store';

// unitario
it('starts with empty array on content', () => {
  const state = store.getState().post;
  expect(state.paginated?.content).toHaveLength(0);
});

// integração
it('update state after fetchPosts dispatch', async () => {
  await store.dispatch(fetchPosts({}));
  const state = store.getState().post;
  expect(state.paginated?.content?.length).toBeGreaterThanOrEqual(1);
});
