export interface IPaginationProps {
  initialPage: number;
  currantPage: (page: number) => void;
  totalPage: number;
}
