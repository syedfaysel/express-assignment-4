import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,

} from "@/components/ui/dialog";
import { Edit } from "lucide-react";

import EditProductForm from "./EditProductForm";
import { productDto } from "@/dto/productDto";

const ProductActionDialog = ({ rowData }: {rowData: productDto}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((prevState) => !prevState)}>
      <DialogTrigger asChild>
        <Button variant="secondary" className={"cursor-pointer bg-muted"} size={"icon"}>
          <Edit size={64} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-auto max-h-full overflow-y-auto my-4">
        <DialogHeader>
          <DialogTitle className="text-xl text-teal-800 text-center">Update Product</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            (Admin Access only)
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-x-2">
          <EditProductForm product={rowData} setIsOpen={setIsOpen} />
        </div>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductActionDialog;