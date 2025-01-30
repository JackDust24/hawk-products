# Hawk-Products

Hawk-Products is a modern e-commerce web application built with React, Node.js, Express,TypeScript, and Vite. The application allows users to browse products, add them to their cart, and proceed to checkout. It features a responsive design, user authentication, and a clean user interface powered by Tailwind CSS and DaisyUI.

## Tech Stack

- **Frontend:**
  - **React**: A JavaScript library for building user interfaces.
  - **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
  - **Vite**: A fast build tool and development server for modern web projects.
  - **Tailwind CSS**: A utility-first CSS framework for creating custom designs without leaving your HTML.
  - **DaisyUI**: A component library built on top of Tailwind CSS, providing pre-designed components.
  - **React Router**: For handling routing and navigation within the application.
  - **Zustand**: A small, fast state management solution for React.
  - **Axios**: A promise-based HTTP client for making API requests.
  - **DOMPurify**: A library for sanitizing HTML to prevent XSS attacks.

- **Backend:**
  - **Node.js**: JavaScript runtime for building the server-side application.
  - **Express**: A web application framework for Node.js, designed for building APIs.
  - **Supabase**: An open-source Firebase alternative that provides a backend as a service, including authentication and database management.
  - **Zod**: A TypeScript-first schema declaration and validation library.

## Features

- **Product Browsing**: Users can view a list of products with images, descriptions, and prices.
- **Product Search**: Users can search for products by name or description.
- **Product Filter**: Users can filter products by category.
- **Product Sorting**: Users can sort products by price and name.
- **Shopping Cart**: Users can add products to their cart, update quantities, and remove items.
- **Checkout Process**: Users can enter their shipping information and place orders.
- **Responsive Design**: The application is fully responsive and works on various devices.
- **Error Handling**: User-friendly error messages and loading states are implemented throughout the application.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Important Note:

The application is designed to place an order on the server through Supabase. My Supabase details are not included in the .env file.

 You can either use your own Supabase account and create your own tables OR amend the server to return a success response without storing the order.

Please refer to the function createOrder in /server/src/controllers/orderController.ts you can change the createOrder function to use your own database.

If you want to use your own Supabase account, you will need to create a new project and create a new database. You will also need to create a new anonymous key. In the types file /server/src/types/types.ts you can base your schem on the Order type.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JackDust24/hawk-products.git
   cd hawk-products
   ```

2. Install dependencies for the client:

   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the server:

   ```bash
   cd server
   npm install
   ```

4. Run the development server:

   ```bash
   cd server
   npm run dev
   ```

5. Run the development client:

   ```bash
   cd client
   npm run dev
   ```

### Environment Variables

Create a `.env` file in the `server` directory and add the following variables:

- `SUPABASE_URL`: Your Supabase URL.
- `SUPABASE_KEY`: Your Supabase anonymous key.
- `DEV_ORIGIN`: The origin for development (e.g., `http://localhost:5173`).
- `PORT`: The port you want to run the server on.
- `NODE_ENV`: development
- `CORS_ORIGIN`: The origin for production.

## Conclusion

Hawk-Products is a robust e-commerce application that showcases modern web development practices. The combination of React, TypeScript, and various libraries provides a solid foundation for building scalable and maintainable applications.
