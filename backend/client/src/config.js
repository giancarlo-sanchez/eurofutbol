export const imageUrl = process.env.REACT_APP_IMAGE_URL || process.env.NODE_ENV === 'production'? 'https://eurofutbol-deployed.herokuapp.com'
: 'http://localhost:8000';
export const baseUrl = process.env.REACT_APP_BASEURL || `${imageUrl}/api`;
export const api_key = 'GBRQgtUZD12yKyxTKTvnU4RzBDKC5iZaZv89gyNg8dmjVxgAQHwfK0OENj6f'
