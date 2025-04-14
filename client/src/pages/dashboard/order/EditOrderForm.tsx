import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TOrder } from "@/dto/orderDto";

type Props = {
  order: TOrder;
  onSubmit: (data: Partial<TOrder>) => void;
};

const EditOrderForm = ({ order, onSubmit }: Props) => {
  const [formData, setFormData] = useState({
    status: order.status || "pending",
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSelectChange = (field: "role" | "status", value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/*Udpate Order Status */}
      <Label htmlFor="Status">Status</Label>
      <Select
        value={formData.status}
        onValueChange={(val) => handleSelectChange("status", val)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent className="space-y-4">
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="shipped">Shipped</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
      >
        Save Changes
      </Button>
    </form>
  );
};

export default EditOrderForm;
