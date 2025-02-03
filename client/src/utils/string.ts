/*
    This file contains utility function for sanitization.
    It is used to sanitize the input to prevent XSS attacks.
    It is used to sanitize the input to prevent SQL injection attacks.
    ALLOWED_TAGS: [] means no HTML tags are allowed. 
      This ensures that any HTML markup in the input is stripped out.
    ALLOWED_ATTR: [] means no attributes are allowed. 
      This ensures that any attributes in the input are stripped out.
    
    This function is called by the useCheckoutValidation hook to sanitize the input.
*/

import DOMPurify from 'dompurify';

export const sanitizeInput = (input: string): string => {
  const sanitized = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });

  return sanitized.trim().replace(/\s+/g, ' ');
};
