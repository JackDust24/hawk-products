import { Pagination } from '@/components/shared/Pagination';

type PaginationComponentProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange
}: PaginationComponentProps) => {
  return (
    <div className="mt-6">
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

export default PaginationComponent;
