import { productDto } from "@/dto/productDto";
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
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";

import EditProductForm from "./EditProductForm";
import AddProductForm from "./AddProductForm";
const ManageProducts = () => {
  const {
    data,
    isError: isProductsError,
    isLoading: isProductsLoading,
  } = useGetProductsQuery({});
  if (isProductsLoading) return <div>Loading...</div>;
  if (isProductsError) return <div>Error loading products</div>;
  const products: productDto[] = data?.data || [];
  console.log(data);

  return (
    <div>
      <div className="text-center font-bold text-xl py-5">Manage Products</div>
      <div className="flex justify-end items-center mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Product</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-6">
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
              <DialogDescription>
                Fill out the product details below.
              </DialogDescription>
            </DialogHeader>

            <AddProductForm
              onSubmit={(newProduct) => {
                console.log("Add product:", newProduct);
                


   
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        {products.map((product) => (
          <Table key={product._id} className="overflow-x-scroll">
            <TableCaption>A list of your products.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Colors</TableHead>
                <TableHead className="text-right">Sizes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <img className="w-20" src={product.images[0]} alt="" />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell className="text-right">
                  {product.colors?.map((color, index) => {
                    return (
                      <span key={index}>
                        {color}
                        {index !== (product.colors ?? []).length - 1 && ", "}
                      </span>
                    );
                  })}
                </TableCell>
                <TableCell className="text-right">
                  {product.colors?.map((size, index) => {
                    return (
                      <span key={index}>
                        {size}
                        {index !== (product.colors ?? []).length - 1 && ", "}
                      </span>
                    );
                  })}
                </TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit Product</Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-6">
                      <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                        <DialogDescription>
                          Update your product details below.
                        </DialogDescription>
                      </DialogHeader>

                      <EditProductForm
                        product={product}
                        onSubmit={(updatedData) => {
                          console.log("Submit updated product:", updatedData);

                        }}
                      />
                    </DialogContent>
                  </Dialog>

                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 ml-2 cursor-pointer">
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
