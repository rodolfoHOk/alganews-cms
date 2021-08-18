import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import UserPerformance from "../features/UserPerformance";
import PostsList from "../features/PostsList";
import UserTopTags from "../features/UserTopTags";
import UserEarnings from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary";
import usePosts from "../../core/hooks/usePosts";
import { useEffect } from "react";


export default function Home() {
  usePageTitle('Home');
  const { paginatedPosts, loading, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts({page: 0});
  }, [fetchPosts]);

  return <DefaultLayout>
    { loading ? 'carregando...' : '' }
    { paginatedPosts?.map(post => <li>{post.title}</li>)}
    <hr />
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
