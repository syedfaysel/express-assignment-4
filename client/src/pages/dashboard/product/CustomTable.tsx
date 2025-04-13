import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type {
  ColDef,
  ICellRendererParams,
  ValueGetterParams,
} from "ag-grid-community";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";
import { productDto } from "@/dto/productDto";
import AddProductForm from "./AddProductForm";
import { defaultTablePagination } from "@/utils/tablePagination";

const ManageTable = () => {
  const {
    data,
    isError: isProductsError,
    isLoading: isProductsLoading,
    error: productsError,
  } = useGetProductsQuery({});

  const products = data?.data;

  const [rowData, setRowData] = useState<
    {
      name: string;
      brand: string | null;
      price: string;
      category: string;
      stock: number;
      isFeatured: boolean;
      updatedAt: Date;
      date: Date;
    }[]
  >([]);

  // Column Definitions: Defines the columns to be displayed.
  const columnDefs: ColDef<{
    name: string;
    brand: string | null;
    price: string;
    category: string;
    actions: React.ReactNode;
    index: number;
    stock: number;
    isFeatured: boolean;
    updatedAt: Date;
    date: Date;
  }>[] = [
    {
      field: "index",
      headerName: "#",
      valueGetter: (params) =>
        params?.node?.rowIndex != null ? params.node.rowIndex + 1 : 0,
      width: 60,
      sortable: false,
    },
    {
      field: "name",
      headerName: "Product Name",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      field: "brand",
      headerName: "Brand",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      filter: true,
      sortable: true,
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      filter: true,
      sortable: true,
      flex: 1,
    },
    {
      field: "date",
      filter: "agDateColumnFilter",
      filterParams: {
        buttons: ["clear", "reset"],
      },
      sortable: true,
      flex: 1,
    },
    {
      headerName: "",
      field: "actions",
      flex: 0.4,
      cellRenderer: (params: ValueGetterParams) => {
        return params.data ? (
          <div className="w-3">
            <button onClick={() => console.log("taking action")} />
          </div>
        ) : null;
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      filter: true,
      sortable: true,
      flex: 1,
    },
    {
      field: "isFeatured",
      headerName: "Featured",
      filter: true,
      sortable: true,
      flex: 1,
    },
    {
      field: "updatedAt",
      headerName: "Updated At",
      filter: true,
      sortable: true,
      flex: 1,
    },
  ];

  let content: React.ReactNode;
  console.log("row data", rowData);

  useEffect(() => {
    if (products && products.length) {
      setRowData(
        products.map((p: productDto) => {
          return {
            name: p.name,
            brand: p.brand,
            price: p.price,
            category: p.category,
            stock: p.stock,
            isFeatured: p.isFeatured,
            updatedAt: new Date(p.updatedAt).toLocaleDateString(),
            date: new Date(
              new Date(p.createdAt).getFullYear(),
              new Date(p.createdAt).getMonth(),
              new Date(p.createdAt).getDate()
            ),
          };
        })
      );
    }
  }, [products]);

  // Show loading states based on the hook status flags
  if (isProductsLoading) {
    content = <div>Loading...</div>;
  } else if (products && products.length) {
    content = <div>Show All Products</div>;
  } else if (isProductsError) {
    content = <div>{productsError?.toString()}</div>;
  }

  return (
    <div>
      {/*Head*/}
      <div className="relative mb-10">
        <h1 className="text-2xl text-center font-medium">Petty Cash</h1>
        <div className="top-5 right-10 absolute mb-10">
          Hi there
        </div>
      </div>

      <div className="p-2">
        <div>
          <h1 className="text-2xl text-center font-medium">{content}</h1>
        </div>
        <AgGridReact
          rowData={rowData.map((item, index) => ({
            ...item,
            index: index + 1, // Assign index
            // actions: <PettyCashActionDialog rowData={item} />, // Add actions
            actions: <div>Hi</div>,
          }))}
          columnDefs={columnDefs}
          domLayout="autoHeight"
          // pagination={defaultTablePagination.pagination}
          // paginationPageSize={defaultTablePagination.paginationPageSize}
          // paginationPageSizeSelector={
          //   defaultTablePagination.paginationPageSizeSelector
          // }
        />
      </div>
    </div>
  );
};

export default ManageTable;
