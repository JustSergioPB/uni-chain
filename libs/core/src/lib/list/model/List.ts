export interface List<T> {
  items: T[];
  total: number;
  pages: number;
  page: number;
}

export const defaultList: List<any> = {
  items: [],
  total: 0,
  pages: 0,
  page: 0,
};
