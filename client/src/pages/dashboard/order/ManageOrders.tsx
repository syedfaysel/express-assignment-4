import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useGetOrdersQuery } from "@/redux/features/order/orderApi";
import { OrderResponseDto } from "@/dto/orderDto";
import EditOrderForm from "./EditOrderForm";

const ManageOrders = () => {

  const { data, isLoading, isError } = useGetOrdersQuery({});

  const orders : OrderResponseDto[] = data?.data || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold">Manage Orders</h1>
        <p className="text-gray-500">Manage and track orders</p>
      </div>

      {/* Table Start */}
      <div className="w-full p-4">
        <Table className="overflow-x-auto border p-3" align="center">
          <TableCaption>A list of Orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>OrderID</TableHead>
              <TableHead>UserId</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>#Products</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {order?.orderNumber}
                </TableCell>
                <TableCell>{order.userId}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.products.length}</TableCell>
                <TableCell>
                  {order.isPaid ? "Paid" : "Unpaid"}
                </TableCell>
                <TableCell>{new Date(order.createdAt!).toLocaleDateString()}</TableCell>

                {/* Action */}
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-6">
                      <DialogHeader>
                        <DialogTitle>Edit user</DialogTitle>
                        <DialogDescription>
                          Update your user details below.
                        </DialogDescription>
                      </DialogHeader>

                      <EditOrderForm
                        order={order}
                        onSubmit={(updatedData) => {
                          console.log("Submit updated order:", updatedData);
                        }}
                      />
                    </DialogContent>
                  </Dialog>

                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 ml-2 cursor-pointer">
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Table End */}
    </div>
  );
};

export default ManageOrders;
