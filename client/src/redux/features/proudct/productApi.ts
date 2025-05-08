import { baseApi, tagTypes } from "@/redux/api/baseApi";

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
      providesTags: [tagTypes.productTag],
    }),

    createProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add-product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.productTag],
    }),

    getProductsByCategory: builder.query({
      query: ({ productCategory }) => ({
        url: `/products/category/${productCategory}`,
        method: "GET",
      }),
      providesTags: [tagTypes.productTag],
    }),

    getSingleProduct: builder.query({
      query: ({ productId }) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.productTag],
    }),

    updateProduct: builder.mutation({
      query: ({ productId, data }) => ({
        url: `/products/${productId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.productTag],
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.productTag],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
