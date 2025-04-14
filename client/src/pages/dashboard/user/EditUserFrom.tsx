import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TAuthUser } from "@/redux/features/auth/authSlice";

type Props = {
  user: TAuthUser;
  onSubmit: (data: Partial<TAuthUser>) => void;
};

const EditUserForm = ({ user, onSubmit }: Props) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    role: user.role || "user",
    userStatus: user.userStatus || "active",
    age: user.age || undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (field: "role" | "userStatus", value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      {/* Role */}
      <div>
        <Label htmlFor="role">Role</Label>
        <Select value={formData.role} onValueChange={(val) => handleSelectChange("role", val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Status */}
      <div>
        <Label htmlFor="status">Status</Label>
        <Select value={formData.userStatus} onValueChange={(val) => handleSelectChange("userStatus", val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Age */}
      <div>
        <Label htmlFor="age">Age</Label>
        <Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full">Save Changes</Button>
    </form>
  );
};

export default EditUserForm;
