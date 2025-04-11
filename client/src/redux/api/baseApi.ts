import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// base api for all endpoints | it remains clean
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/api/v1",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
