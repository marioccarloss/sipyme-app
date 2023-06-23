import authorizationApi from './config';

const serviceRequest = async (
  order_by: string,
  per_page: number,
  page: number,
  product_barcode: string | undefined,
  product_name: string | undefined,
  product_ref: string | undefined,
  product_status: string | undefined
) => {
  const url = `/api/services?order_by=${order_by}&per_page=${per_page}${
    product_barcode !== undefined ? `&product_barcode=${product_barcode}` : ''
  }${product_name !== undefined ? `&product_name=${product_name}` : ''}${
    product_ref !== undefined ? `&product_ref=${product_ref}` : ''
  }${product_status !== undefined ? `&product_status=${product_status}` : ''}${
    page !== undefined ? `&page=${page}` : ''
  }`;

  const response = await authorizationApi.get(url);
  return response.data;
};

export const serviceStatistics = async () => {
  const url = '/api/services/statistics';
  const response = await authorizationApi.get(url);
  return response.data;
};

export default serviceRequest;
