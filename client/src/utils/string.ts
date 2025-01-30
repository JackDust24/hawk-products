/*
    This file contains utility function for sanitization.
*/

import DOMPurify from 'dompurify';

export const sanitizeInput = (input: string): string => {
  const sanitized = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });

  return sanitized.trim().replace(/\s+/g, ' ');
};
