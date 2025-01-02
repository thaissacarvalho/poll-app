import dotenv from 'dotenv';

dotenv.config();

const domain = process.env.DOMAIN;
const methods = process.env.METHOD;
const headers = process.env.HEADERS

export const corsOptions = {
  origin: [domain],
  methods: [methods],
  allowedHeaders: [headers],
  credentials: true,
};
