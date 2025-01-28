export const getImageUrl = (path: string) => {
  if (!path) return '/images/placeholder.jpg';
  return `${import.meta.env.VITE_API_URL}${path}`;
};
