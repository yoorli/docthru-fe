import { useGeWorkFeedbacks } from '@/service/queries/work';
import styles from './FeedbackList.module.css';
import EmptyFeedbacks from './EmptyFeedbacks';
import FeedbackContent from './FeedbackContent';
import Loader from '../common/Loader';
import Message from '../common/Message';

export default function FeedbackList({ id }) {
  if (!id) {
    return <div>id 없음</div>;
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useGeWorkFeedbacks(id);

  if (isPending) return <Loader />;

  const pages = data?.pages || [];
  const isEmpty = pages[0]?.list.length === 0 || pages?.length === 0;

  return isEmpty ? (
    <EmptyFeedbacks />
  ) : (
    <>
      <ul className={styles.FeedbackList}>
        {pages.map((page) => {
          return page.list.map((feedback) => {
            return <FeedbackContent key={feedback.id} feedback={feedback} />;
          });
        })}
      </ul>
      {hasNextPage && !isFetchingNextPage && (
        <button onClick={fetchNextPage} className={styles.loadMoreButton}>
          더 불러오기
        </button>
      )}

      {isFetchingNextPage && <Loader msg="더 불러오는 중..." />}

      {!hasNextPage && !isFetchingNextPage && (
        <Message msg="더 불러올 댓글이 없습니다." height="40px" />
      )}
    </>
  );
}
