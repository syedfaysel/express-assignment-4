import { CreateOrderDto, OrderResponseDto } from "@/dto/orderDto";
import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<OrderResponseDto, void>({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
    }),

    getOrderById: builder.query({
      query: (id: string) => ({
        url: `/orders/${id}`,
        method: "GET",
      }),
    }),

    // update order status
    updateOrderStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/orders/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    // payment gateway stuff
    createOrder: builder.mutation<any, CreateOrderDto>({
      query: (body) => ({
        url: `/orders`,
        method: "POST",
        body
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useUpdateOrderStatusMutation,
  useCreateOrderMutation,
} = orderApi;
