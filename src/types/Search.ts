export type Search = {
  resoults: Resoult[];
  current_page: number;
  total_pages: number;
  added_filters: string;
  filters: Filters;
};

export type Filters = {
  per_page: number;
  text_search: string;
};

export type Item = {
  code: string;
  type: string;
  desc: string;
  option: string;
  url_show: string;
  url_edit: string;
  direct_url: string;
  created_at: string;
};

export type Resoult = {
  type: string;
  items: Item[];
};
