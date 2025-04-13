import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TShippingAddress } from "@/redux/features/auth/authSlice";
// import { Button } from "@/components/ui/button";


interface OrderFormProps {
  shippingAddress: TShippingAddress;
  setShippingAddress: React.Dispatch<React.SetStateAction<TShippingAddress>>;
  contactPhone: string;
  setContactPhone: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({
  shippingAddress,
  setShippingAddress,
  contactPhone,
  setContactPhone,
  onSubmit,
}) => {
  return (

    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-4 mx-auto p-4 mb-5 border rounded-md shadow-sm bg-white"
    >
      <h2 className="text-xl font-bold mb-4">Shipping Details</h2>

      {/* Street */}
      <div>
        <Label htmlFor="street">Street</Label>
        <Input
          id="street"
          value={shippingAddress.street}
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, street: e.target.value })
          }
          placeholder="123 Stationery Lane"
        />
      </div>

      {/* City */}
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          value={shippingAddress.city}
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, city: e.target.value })
          }
          placeholder="Dhaka"
        />
      </div>

      {/* Postal Code */}
      <div>
        <Label htmlFor="postalCode">Postal Code</Label>
        <Input
          id="postalCode"
          value={shippingAddress.postalCode}
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              postalCode: e.target.value,
            })
          }
          placeholder="1207"
        />
      </div>

      {/* Country */}
      <div>
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          value={shippingAddress.country}
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, country: e.target.value })
          }
          placeholder="Bangladesh"
        />
      </div>

      {/* Contact Phone */}
      <div>
        <Label htmlFor="contactPhone">Contact Phone</Label>
        <Input
          id="contactPhone"
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
          placeholder="+880123456789"
        />
      </div>
    </form>
  );
};

export default OrderForm;
