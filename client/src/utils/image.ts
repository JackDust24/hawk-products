/*
    This file contains utility function for image.
    It is used to get the image URL.
*/

export const getImageUrl = (image: string) => {
  if (!image) return '/images/placeholder.jpg';
  return `${process.env.VITE_API_URL}${image}`;
};
