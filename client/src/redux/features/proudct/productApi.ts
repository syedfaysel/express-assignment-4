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

    createProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add-product",
        method: "POST",
        body: data,
      }),
    }),

     updateProduct: builder.mutation({
      query: ({ productId, data }) => ({
        url: `/products/${productId}`,
        method: "PATCH", 
        body: data,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
    }),
    

  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
