export type Services = {
  services: Service[];
  current_page: number;
  total_pages: number;
  added_filters: string;
  filters: Filters;
};

export type Filters = {
  product_ref: string;
  product_barcode: string;
  product_name: string;
  product_status: string;
  per_page: number;
  order_by: string;
};

export type Service = {
  id: number;
  code: string;
  name: string;
  reference: string;
  barcode: string;
  status: string;
  onstock: number | null;
  cost_price: string;
  price_sold: string;
  option: string;
  url_show: string;
  url_edit: string;
  url_delete: string;
};
