const Payment = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
  
      const userName = form.username.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const address = form.address.value;
  
      console.log(userName, email, phone, address,);
  
      await fetch(`${import.meta.env.VITE_API_URL}/api/v1/ssl`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          price:3000,
          email,
          phone,
          address,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          window.location.replace(result.url)
          console.log(result);
        });
    };
  
    return (
      <div className="">
        <h1 className="text-2xl text-center font-bold">
          submit required information for completing the payment
        </h1>
  
        <div className="my-16">
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
        </div>
      </div>
    );
  };
  
  export default Payment;
  