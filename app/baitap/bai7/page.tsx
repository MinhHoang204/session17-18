import Breadcrumbs from '@/components/Breadcrumbs';

export default function PostsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Posts', href: '/posts' },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>Danh sách bài viết</h1>
    </div>
  );
}