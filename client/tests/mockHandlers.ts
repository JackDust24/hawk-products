import { http } from 'msw';

export const handlers = [
  http.get('http://localhost:8080/api/api/products/categories', ({ request }) => {
    return new Response(
      JSON.stringify([
        { id: '1', name: 'Electronics', description: 'All electronic items', image: 'image1.jpg' },
        { id: '2', name: 'Books', description: 'All kinds of books', image: 'image2.jpg' }
      ]),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }),
  http.get('http://localhost:8080/api/products/product/:id', ({ params }) => {
    const { id } = params;
    return new Response(
      JSON.stringify({
        id,
        name: 'Mock Product',
        description: 'Mock electronic',
        image: 'image1.jpg',
        price: 100,
        category: 'Electronics'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  })
];
