import {
  Box,
  Icon,
  IconButton,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  IClose,
  ILogo,
  IEditPencil,
  IMcSymbol,
  IVerifiedBadge,
  IDots,
  IWifi, 
  IChip,
  IMastercard,
  IApple,
  IDocket

} from "../utils/icons.utils";
import LoadingButton from '@mui/lab/LoadingButton';

const Home = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    const valueWithStrips = value.replace(/[^0-9]/g, "");

    let formattedValue = "";
    for (let value = 0; value < valueWithStrips.length; value += 4) {
      if (value + 4 <= valueWithStrips.length) {
        formattedValue += valueWithStrips.substr(value, 4) + " - ";
      } else {
        formattedValue += valueWithStrips.substr(value);
      }
    }
    const maxLength = 25;
    formattedValue = formattedValue.slice(0, maxLength);

    setInputValue(formattedValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      let formattedValue = inputValue;

      if (formattedValue.length > 0) {
        if (formattedValue.slice(-3) === " - ") {
          formattedValue = formattedValue.slice(0, -3);
        } else {
          formattedValue = formattedValue.slice(0, -1);
        }

        setInputValue(formattedValue);
      }
    }
  };

  return (
    <Box className=" bg-[var(--c-white-2)] md:w-[80%]  w-[90%] pb-8 m-auto ">
      <Box className="flex justify-end">
        <img src={IClose} className="w-[25px] m-4 cursor-pointer" />
      </Box>
      <Box className="xl:grid xl:grid-cols-3 mb-16 mauto  xl:w-[95%]">
        <Box className="xl:col-span-2 m-auto">
          <Box className="md:flex md:justify-between lg:mr-14 md:mr-8  mb-5 ">
            <img src={ILogo} className="md:w-[30%] w-[70%]  my-4 lg:ml-7 md:ml-3  cursor-pointer" />
            <Box className="text-white mt-5 ml-5 md:ml-0 ">
              <span className="px-3 py-4 bg-[var(--c-primary-3)] rounded-md text-[1.3rem] mx-1">
                0
              </span>
              <span className="px-3 py-4 bg-[var(--c-primary-3)] rounded-md text-[1.3rem] mr-1">
                1
              </span>
              <span className="text-[2rem] text-black mx-1">:</span>
              <span className="px-3 py-4 bg-[var(--c-primary-3)] rounded-md text-[1.3rem] ml-1">
                1
              </span>
              <span className="px-3 py-4 bg-[var(--c-primary-3)] rounded-md text-[1.3rem] mx-1">
                9
              </span>
            </Box>
          </Box>
          <Box className="md:flex md:justify-between lg:mx-14 md:mx-9 mx-5">
            <Box className="">
              <h3 className="text-[var(--text-bg)] font-[500] text-[18px]">
                Card Number
              </h3>
              <Typography className="text-[var(--c-grey-0)]">
                Enter the 16-digit card number on the card
              </Typography>
            </Box>
            <Box className="flex gap-2 md:mt-4">
              <img src={IEditPencil} className="w-[20px] mb-6 cursor-pointer" />
              <span className="cursor-pointer text-[20px] text-[var(--c-primary-0)]">
                Edit
              </span>
            </Box>
          </Box>
          <Box className="lg:mx-14 md:mx-9 mx-5 md:my-8">
            <OutlinedInput
              style={{ borderRadius: 10 }}
              fullWidth
              // label="fullWidth"
              id="fullWidth"
              value={inputValue}
              onChange={handleInputChange}
              inputProps={{
                maxLength: 25,
              }}
              startAdornment={
                <InputAdornment position="start">
                  <img
                    src={IMcSymbol}
                    alt="IMcSymbol"
                    className="w-[45px] h-[45px] mr-8"
                  />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <img
                    src={IVerifiedBadge}
                    alt="IMcSymbol"
                    className="w-[45px] h-[45px]"
                  />
                </InputAdornment>
              }
              onKeyDown={handleKeyDown}
            />
          </Box>
          <Box className="md:flex md:justify-between  lg:mx-14 md:mx-9 mx-5 my-8">
            <Box className="">
                <h3 className="text-[var(--text-bg)] font-[500] text-[18px]">
                  CVV Number
                </h3>
                <Typography className="text-[var(--c-grey-0)]">
                  Enter the 3 or 4 digit number on the card
                </Typography>
            </Box>
            <Box className="md:w-[45%] w-[100%] md:flex justify-end">
            <OutlinedInput
            className="text-[var(--c-grey-0)] w-full"
              style={{ borderRadius: 10 }}
              // value={inputValue}
              // onChange={handleInputChange}
              inputProps={{
                maxLength: 4,
                style: { textAlign: 'center' },
                inputMode: 'numeric', 
                pattern: '[0-9]*'
              }}
              endAdornment={
                <InputAdornment position="end">
                  <img
                    src={IDots}
                    alt="IMcSymbol"
                    className="w-[45px] h-[45px]"
                  />
                </InputAdornment>
              }
            />
            </Box>
          </Box>
          <Box className="md:flex md:justify-between  lg:mx-14 md:mx-9 mx-5 my-8">
            <Box className="">
                <h3 className="text-[var(--text-bg)] font-[500] text-[18px]">
                  Expire Date
                </h3>
                <Typography className="text-[var(--c-grey-0)]">
                  Enter the expiration date of the card
                </Typography>
            </Box>
            <Box className="md:w-[45%] w-[100%] flex justify-end gap-4">
            <OutlinedInput
              style={{ borderRadius: 10 }}
              // value={inputValue}
              // onChange={handleInputChange}
              inputProps={{
                maxLength: 2,
                style: { textAlign: 'center' },
              }}
            />
            <span className="text-[30px] text-[var(--c-grey-0)] mt-2">/</span>
            <OutlinedInput
              style={{ borderRadius: 10 }}
              type="year"
              // value={inputValue}
              // onChange={handleInputChange}
              inputProps={{
                maxLength: 4,
                style: { textAlign: 'center' }
              }}
            />
            </Box>
          </Box>
          <Box className="md:flex md:justify-between  lg:mx-14 md:mx-9 mx-5 my-8">
            <Box className="">
                <h3 className="text-[var(--text-bg)] font-[500] text-[18px]">
                  Password
                </h3>
                <Typography className="text-[var(--c-grey-0)]">
                  Enter your Dynamic password
                </Typography>
            </Box>
            <Box className="md:w-[45%] w-[100%] md:flex md:justify-end">
            <OutlinedInput
             className="text-[var(--c-grey-0)] w-full"
              type="password"
              autoComplete="current-password"
              style={{ borderRadius: 10, textAlign: 'center' }}
              // value={inputValue}
              // onChange={handleInputChange}
              InputProps={{
                textAlign: 'center'
              }}
              endAdornment={
                <InputAdornment position="end">
                  <img
                    src={IDots}
                    alt="IMcSymbol"
                    className="w-[45px] h-[45px]"
                  />
                </InputAdornment>
              }
            />
            </Box>
          </Box>
          <Box className="lg:mx-14 md:mx-4 px-5 lg:px-0 mt-14 mb-20">
          <LoadingButton
					className="my-10 h-[70px] Radius bg-[var(--c-primary-0)] hover:bg-[var(--c-primary-1)] shadow-none"
					sx={{".MuiLoadingButton-loadingIndicatorCenter": {color: 'var(--c-bg-color) !important'}}}
					size="large"
					type="submit"
					variant="contained"
					fullWidth
          >Pay Now</LoadingButton>
          </Box>
        </Box>
        <Box className="relative">
          <Box className="absolute md:left-[16%] lg:left-[25%] xl:left-0 bottom-[60%] md:bottom-[60%] lg:bottom-[65%] xl:bottom-[50%]">
          <hr className="w-[18%] border-t-8 m-auto border-[var(--c-primary-0)] rounded-t-[3px]"/>
          <Box className="bg-[url('./assets/images/mastercardBackground.png')] xl:w-[80%] lg:w-[60%] md:w-[50%] w-[80%] m-auto rounded-[20px] shadow-md">
            <Box className="flex justify-between pt-8 px-6">
              <img src={IChip} alt="IChip" className="w-[23%] "/>
              <img src={IWifi} alt="IWifi" className="w-[17%] h-[30px] mt-3"/>
            </Box>
            <Box className=" pt-20 px-6">
              <Typography className="text-[var(--text-bg)]">Jonathan Michael</Typography>
              <span className="mr-2 text-[var(--text-bg)] font-[500] text-[23px]">• • • •</span>
              <span className="text-[var(--text-bg)] font-[500] text-[23px]">3456</span>
            </Box>
            <Box className="flex justify-between py-8 px-6">
              <span className="text-[var(--text-bg)] font-[500] text-[23px]">09/22</span>
              <img src={IMastercard} alt="IChip" className="w-[25%] "/>
            </Box>
          </Box>
          </Box>
          <Box className="bg-[var(--c-success-0)] xl:w-[100%] lg:w-[60%] md:w-[60%] w-[90%] md:mt-[25%] mt-[45%] xl:pt-[95%] lg:pt-[35%] md:pt-[45%] pt-[100%]  m-auto rounded-t-[20px] rounded-b-[20px] shadow-md">
            <Box className="flex justify-between md:mx-10 mx-5">
              <span className="text-[var(--c-grey-0)]">Company</span>
              <Box className="flex gap-2">
              <img src={IApple} alt="IChip" className="w-[25px] "/>
              <span className="font-bold text-[var(--c-primary-3)]">Apple</span>
              </Box>
            </Box>
            <Box className="flex justify-between mt-3 md:mx-10 mx-5">
              <span className="text-[var(--c-grey-0)]">Order Number</span>
              <span className="font-bold text-[var(--c-primary-3)]">1266201</span>
            </Box>
            <Box className="flex justify-between mt-3 md:mx-10 mx-5">
              <span className="text-[var(--c-grey-0)]">Product</span>
              <span className="font-bold text-[var(--c-primary-3)]">MackBook Air</span>
            </Box>
            <Box className="flex justify-between mt-3 mb-8 md:mx-10 mx-5">
              <span className="text-[var(--c-grey-0)]">VAT(20%)</span>
              <span className="font-bold text-[var(--c-primary-3)]">$100.00</span>
            </Box>
            <hr className="border-dashed border-1" />
            <Box className="flex justify-between mt-8 md:mx-10 mx-5">
             <Box className="mb-10">
                <span className="text-[var(--c-grey-0)]">You have to Pay</span>
                <h3 className="font-bold text-[var(--c-primary-3)] text-[29px]">549.<span className="font-[500] text-[20px]">99</span> <span className="font-[500] text-[20px] text-[var(--c-grey-0)]">USD</span></h3>
             </Box>
             <img src={IDocket} alt="IDocket" className="mb-8 mt-3 w-[35px] h-[35px]"/>

            </Box>
            
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
