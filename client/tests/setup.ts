/*
 * This is where we extend the expects statement with useful helpers from RTL
 * We also configure the mock server to listen for requests before every test
 */
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
import server from './mock-api-server';
import { afterAll, afterEach, beforeAll } from 'vitest';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
