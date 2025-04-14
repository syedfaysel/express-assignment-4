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
import { TAuthUser } from "@/redux/features/auth/authSlice";
import { useGetUsersQuery } from "@/redux/features/user/userApi";
import EditUserForm from "./EditUserFrom";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const ManageUsers = () => {
  const {
    data,
    isError: isUsersError,
    isLoading: isUsersLoading,
  } = useGetUsersQuery({});
  if (isUsersLoading) return <div>Loading...</div>;
  if (isUsersError) return <div>Error loading users</div>;
  const users: TAuthUser[] = data?.data || [];
  console.log(data);
  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold">Manage Users</h1>
        <p className="text-gray-500">Manage your users here.</p>
      </div>

      {/* Table Start */}
      <div className="w-full overflow-x-auto border">
        <div className="min-w-[600px]">
          <Table>
            <TableCaption>A list of users.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Profile Photo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Account Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="w-10 h-10 rounded-full"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.age || "Not provided"}</TableCell>
                  <TableCell>
                    {user.userStatus == "active" ? "Active" : "Inactive"}
                  </TableCell>
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

                        <EditUserForm
                          user={user}
                          onSubmit={(updatedData) => {
                            console.log("Submit updated user:", updatedData);
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
      </div>
      {/* Table End */}
    </div>
  );
};

export default ManageUsers;
