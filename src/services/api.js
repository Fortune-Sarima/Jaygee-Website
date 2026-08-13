const API_URL = 'http://localhost:1337/api';

export const getCollections = async () => {
  const response = await fetch(
    `${API_URL}/collections?populate[coverImage]=true&populate[products][populate]=Images`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch collections');
  }

  const data = await response.json();

  return data.data;
};

export const getFeaturedProducts = async () => {
  const response = await fetch(
    `${API_URL}/products?filters[Featured][$eq]=true&populate=Images`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch featured products');
  }

  const data = await response.json();

  return data.data;
};