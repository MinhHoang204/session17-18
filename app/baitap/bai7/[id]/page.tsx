import Breadcrumbs from '@/components/Breadcrumbs';
import { useRouter } from 'next/router';

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Posts', href: '/posts' },
    { label: `Post ${params.id}`, href: `/posts/${params.id}` },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>Chi tiết bài viết {params.id}</h1>
    </div>
  );
}  