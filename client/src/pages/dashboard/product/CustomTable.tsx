// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/Kxl3Hj1Fh0x
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
// import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination"

export default function CustomTable() {
  return (
    <div className="w-full overflow-auto border border-gray-200 rounded-lg shadow dark:border-gray-800">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12" />
            <TableHead className="text-xs">ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">
              <span className="flex items-center">
                Price
                <ChevronDownIcon className="h-4 w-4 ml-1 -translate-y-0.5 opacity-50" />
              </span>
            </TableHead>
            <TableHead className="text-right">Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-xs">1</TableCell>
            <TableCell className="font-medium">Laptop</TableCell>
            <TableCell>Electronics</TableCell>
            <TableCell className="text-right">$1200.00</TableCell>
            <TableCell className="text-right">100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs">2</TableCell>
            <TableCell className="font-medium">T-Shirt</TableCell>
            <TableCell>Apparel</TableCell>
            <TableCell className="text-right">$25.00</TableCell>
            <TableCell className="text-right">500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs">3</TableCell>
            <TableCell className="font-medium">Sneakers</TableCell>
            <TableCell>Footwear</TableCell>
            <TableCell className="text-right">$100.00</TableCell>
            <TableCell className="text-right">200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs">4</TableCell>
            <TableCell className="font-medium">Backpack</TableCell>
            <TableCell>Bags</TableCell>
            <TableCell className="text-right">$50.00</TableCell>
            <TableCell className="text-right">300</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs">5</TableCell>
            <TableCell className="font-medium">Watch</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell className="text-right">$300.00</TableCell>
            <TableCell className="text-right">150</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs">6</TableCell>
            <TableCell className="font-medium">Headphones</TableCell>
            <TableCell>Audio</TableCell>
            <TableCell className="text-right">$80.00</TableCell>
            <TableCell className="text-right">400</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs">7</TableCell>
            <TableCell className="font-medium">Smartphone</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell className="text-right">$700.00</TableCell>
            <TableCell className="text-right">250</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs">8</TableCell>
            <TableCell className="font-medium">Guitar</TableCell>
            <TableCell>Musical Instruments</TableCell>
            <TableCell className="text-right">$400.00</TableCell>
            <TableCell className="text-right">50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs">9</TableCell>
            <TableCell className="font-medium">Camera</TableCell>
            <TableCell>Photography</TableCell>
            <TableCell className="text-right">$900.00</TableCell>
            <TableCell className="text-right">75</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs">10</TableCell>
            <TableCell className="font-medium">Printer</TableCell>
            <TableCell>Peripherals</TableCell>
            <TableCell className="text-right">$150.00</TableCell>
            <TableCell className="text-right">125</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}