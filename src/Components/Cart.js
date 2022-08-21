import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../features/cartSlice";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.persistedReducer.cart.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  if (open === true) {
    setInterval(() => {
      setOpen(false);
    }, 3000);
  }

  return (
    <>
      <div className="bg-gray-100 h-screen w-full py-5 overflow-hidden">
        {cart?.length <= 0 ? (
          <div className="bg-white max-w-7xl border p-6 mx-auto">
            <div className="flex items-center justify-center flex-col space-y-1">
              <div className="w-[250px]">
                <img
                  src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[17px] font-bold">Your cart is empty!</h3>
              <span className="text-sm pb-4">Add Itmes to it Now</span>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="bg-blue-500  p-2 px-10 rounded-sm shadow-2xl text-white"
              >
                Shop Now
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto  flex lg:space-x-5 justify-between flex-col-reverse lg:flex-row ">
            <div className="bg-white max-h-[600px] scrollbar-hide overflow-y-scroll w-full border relative">
              <div>
                <div>
                  {cart &&
                    cart.map((cart) => (
                      <div className="flex items-center space-x-5 border-b mb-5 p-3">
                        <div className="w-[100px] h-[100px]">
                          <img
                            src={cart?.img}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3>{cart?.title}</h3>
                          <span>Seller:{cart?.brand}</span>
                          <div>
                            <span className="text-gray-500 line-through text-sm">
                              ${cart?.price - 10}
                            </span>
                            <span className="pl-2">${cart?.price}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <button className="text-[17px] hover:text-blue-600 transition-all duration-200">
                              Save for latter
                            </button>
                            <button
                              className="text-[17px] hover:text-blue-600 transition-all duration-200"
                              onClick={() => {
                                dispatch(removeCart(cart?.id), setOpen(true));
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="bg-white flex items-center border-t shadow-md sticky -bottom-1 left-0 h-[75px] w-full">
                <button className="bg-orange-500 mr-5 font-bold tezt-[16px] h-[55px] px-10 rounded-sm shadow-xl text-white ml-auto">
                  Place Order
                </button>
              </div>
            </div>
            <div className="bg-white  border w-full h-[100px] lg:w-[700px] lg:h-[300px] mb-3 lg:mb-0 ">
              <div className="border-b w-full font-bold text-gray-500 p-3">
                Price Details
              </div>
              <div className="flex items-center justify-between p-4">
                <h3>Price (Item: {cart.length})</h3>
                <h3>
                  $
                  {cart?.reduce(
                    (initial, current) => initial.price + current.price
                  )}
                </h3>
              </div>

              <div className="flex items-center border-b justify-between p-4">
                <h3>Discount :</h3>
                <h3>
                  $
                  {cart?.reduce(
                    (initial, current) => initial.price - current.price
                  )}
                </h3>
              </div>
              <div className="flex items-center justify-between p-3">
                <h1 className="font-bold text-[18px]">SubTotal :</h1>
                <h1 className="font-bold text-[18px]"> $
                  {cart?.reduce(
                    (initial, current) => initial.price + current.price
                  )}</h1>
              </div>
            </div>
          </div>
        )}

        <div
          className={`${
            open
              ? "flex itmes-center justify-center mx-auto fixed bottom-3 left-[50%] translate-x-[-50%]"
              : "hidden"
          }`}
        >
          <Stack
            sx={{ width: "100%" }}
            className="shadow-2xl border"
            spacing={2}
          >
            <Alert className="Alert">
              This is a success alert — check it out!
            </Alert>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default Cart;
