import authorizationApi from './config';

const searchRequest = async (
  textSearch: string | undefined,
  perPage: number,
  page: number | undefined,
  grouped: boolean
) => {
  const url = `/api/dashboard/search${
    textSearch ? `?text_search=${textSearch}&` : '?'
  }per_page=${perPage}${grouped ? '&grouped' : ''}${
    page ? `&page=${page}` : ''
  }`;
  const response = await authorizationApi.get(url);
  return response.data;
};

export default searchRequest;
