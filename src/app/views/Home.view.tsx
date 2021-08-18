import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import UserPerformance from "../features/UserPerformance";
import PostsList from "../features/PostsList";
import UserTopTags from "../features/UserTopTags";
import UserEarnings from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, increment } from "../../core/store/Post.slice";
import selectPaginatedPosts from "../../core/selectors/selectPaginatedPosts";
import selectPostsCounter from "../../core/selectors/selectPostsCounter";


export default function Home() {
  usePageTitle('Home');
  const dispatch = useDispatch();
  const paginatedPosts = useSelector(selectPaginatedPosts);
  const postsCounter = useSelector(selectPostsCounter);

  return <DefaultLayout>
    <button onClick={() => dispatch(fetchPosts({ page: 0 }))}>
      disparar ação
    </button>
    {
      paginatedPosts?.map(post => <li>{post.title}</li>)
    }
    <button onClick={() => dispatch(increment())}>
      disparar incrementar
    </button>
      { postsCounter }
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', alignItems: 'center', gap: '32px' }}>
      <ErrorBoundary component="top tags">
        <UserTopTags />
      </ErrorBoundary>
      <ErrorBoundary component="ganhos">
        <UserEarnings />
      </ErrorBoundary>
    </div>
    <UserPerformance />
    <ErrorBoundary component="lista de posts">
      <PostsList />
    </ErrorBoundary>
  </DefaultLayout>
}
