import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { productDto } from "@/dto/productDto";

type EditProductFormProps = {
  product: productDto;
  onSubmit: (updatedProduct: productDto) => void;
};

const EditProductForm: React.FC<EditProductFormProps> = ({
  product,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<productDto>({
    ...product,
    description: product.description || "",
    category: product.category || "",
    brand: product.brand || "",
    colors: product.colors || [],
    sizes: product.sizes || [],
    images: product.images || [],
    tags: product.tags || [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (name: keyof productDto, value: string) => {
    const arr = value.split(",").map((item) => item.trim());
    setFormData((prev) => ({ ...prev, [name]: arr }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold">Edit Product</h2>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Price */}
      <div className="space-y-2">
        <Label htmlFor="price">Price</Label>
        <Input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min={0}
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>

      {/* Stock */}
      <div className="space-y-2">
        <Label htmlFor="stock">Stock</Label>
        <Input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
          min={0}
        />
      </div>

      {/* Brand */}
      <div className="space-y-2">
        <Label htmlFor="brand">Brand</Label>
        <Input name="brand" value={formData.brand} onChange={handleChange} />
      </div>

      {/* Colors */}
      <div className="space-y-2">
        <Label>Colors (comma separated)</Label>
        <Input
          value={formData.colors?.join(", ")}
          onChange={(e) => handleArrayChange("colors", e.target.value)}
        />
      </div>

      {/* Sizes */}
      <div className="space-y-2">
        <Label>Sizes (comma separated)</Label>
        <Input
          value={formData.sizes?.join(", ")}
          onChange={(e) => handleArrayChange("sizes", e.target.value)}
        />
      </div>

      {/* Images */}
      <div className="space-y-2">
        <Label>Image URLs (comma separated)</Label>
        <Input
          value={formData.images?.join(", ")}
          onChange={(e) => handleArrayChange("images", e.target.value)}
        />
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <Label>Tags (comma separated)</Label>
        <Input
          value={formData.tags?.join(", ")}
          onChange={(e) => handleArrayChange("tags", e.target.value)}
        />
      </div>

      {/* Featured */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleChange}
          className="w-4 h-4"
        />
        <Label htmlFor="isFeatured" className="cursor-pointer">
          Featured
        </Label>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full">
        Save Changes
      </Button>
    </form>
  );
};

export default EditProductForm;
