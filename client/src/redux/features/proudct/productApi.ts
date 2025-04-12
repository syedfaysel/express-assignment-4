import { baseApi } from "@/redux/api/baseApi";

export type getOneProductArgsType = {
  productId: string;
};

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),

    getSingleProduct: builder.query({
      query: ({ productId }) => `/products/${productId}`,
    }),
    

  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery
} = productApi;
