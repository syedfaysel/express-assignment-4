import { Button } from "@/components/ui/button";

const Payment = () => {
  const handleOrder = async () => {
    const order = {
      userId: "67fa9bfabcea91d0a2c2753e",
      products: [
        {
          productId: "67f92f5340cfe361a5e92f9a",
          quantity: 2,
          price: 500,
          name: "Stylish Notebook",
          image: "https://example.com/images/notebook.jpg",
          color: "Blue",
          size: "A5",
        },
      ],
      totalAmount: 2200,
      shippingCost: 100,
      shippingAddress: {
        street: "123 Stationery Lane",
        city: "Dhaka",
        postalCode: "1207",
        country: "Bangladesh",
      },
      contactPhone: "+8801234567890",
      customerNote: "Please deliver between 9AM to 5PM.",
      couponCode: "NEWCUSTOMER10",
      status: "pending",
      trackingNumber: null,
      deliveryService: "Pathao",
      // transactionId: "txn_20250413_ABC123XYZ",
      // isPaid: true
    };


    await fetch(`${import.meta.env.VITE_API_URL}/api/v1/orders`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // Redirect to the payment page
        window.location.replace(result.url);
      });
  };

  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold">
        submit required information for completing the payment
      </h1>

      {/* <div className="my-16">
          <p className="text-center font-black text-3xl">payment form</p>
          <div className="w-full   flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-11/12 lg:w-6/12  ">
              <label className="text-xl font-bold" htmlFor="">
                Name
              </label>
              <br />
              <input
                type="text"
                name="username"
                placeholder="Type Name"
                className="w-full focus:outline-amber-800   rounded-lg py-2 outline-[2px] outline-amber-200"
              />
              <br /> <br />
              <label className="text-xl font-bold" htmlFor="">
                Email
              </label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Type Email"
                className="w-full focus:outline-amber-800   rounded-lg py-2 outline-[2px] outline-amber-200"
              />
              <br /> <br />
              <label className="text-xl font-bold" htmlFor="">
                Phone
              </label>
              <br />
              <input
                type="text"
                name="phone"
                placeholder="Type Phone"
                className="w-full focus:outline-amber-800   rounded-lg py-2 outline-[2px] outline-amber-200"
              />
              <br /> <br />
              <label className="text-xl font-bold" htmlFor="">
                Address
              </label>
              <br />
              <input
                type="text"
                name="address"
                placeholder="Type Address"
                className="w-full focus:outline-amber-800   rounded-lg py-2 outline-[2px] outline-amber-200"
              />
              <br /> <br />
              <button
                className="w-full bg-amber-700 rounded-lg py-3 cursor-pointer "
                type="submit"
              >
                submit
              </button>
            </form>
          </div>
        </div> */}

      <Button
        className=""
        onClick={handleOrder}
      >
        Place Order
      </Button>
    </div>
  );
};

export default Payment;
