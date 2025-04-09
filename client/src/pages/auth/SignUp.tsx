import { Link } from "react-router-dom";

const signUp = () => {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Create Your Account
                    </p>
                    <p>
                    Sign up to explore exclusive products and enjoy seamless shopping.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        
                        className="space-y-5"
                    >
                        
                        <div>
                            <label className="font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-700 shadow-sm rounded-lg"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-700 shadow-sm rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-700 shadow-sm rounded-lg"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div>
                            <p className="w-full mt-2 font-medium">Already have an account? <span className="font-bold text-blue-600"> <Link to="/login">Login</Link> </span></p>
                        </div>
                        
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-black hover:bg-gray-700 active:bg-gray-700 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default signUp;