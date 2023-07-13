import * as Yup from "yup";

const pincode = /^[0-9]{6}?$/;
const mobNum = /^[0-9]{10}?$/;
const adhNum = /^[0-9]{12}?$/;
const contNum = /^\+?[1-9][0-9]{7,14}$/;

const passRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const farmSchema = Yup.object({
  agriType: Yup.string().required("Please select your class !"),
  firstName: Yup.string().min(4).required("Please fill your first-name !"),
  lastName: Yup.string().min(4).required("Please fill your last-name !"),
  streetAddress: Yup.string().min(8).required("Please fill your address box !"),
  country: Yup.string()
    .min(4)
    .max(10)
    .required("Please specify your country !"),
  city: Yup.string().min(4).max(20).required("Please specify your city !"),
  region: Yup.string()
    .min(4)
    .required("Please specify your state or province !"),
  district: Yup.string().min(4).required("Please specify your district !"),
  postalCode: Yup.string()
    .min(6)
    .matches(pincode, { message: "Please enter valid pin code !" })
    .required("Please enter your postal-code or pin-code !"),
  mobileNum: Yup.string()
    .min(10)
    .matches(mobNum, { message: "Please enter valid mobile number !" })
    .required("Please enter your mobile number !"),
  adharNum: Yup.string()
    .min(12)
    .matches(adhNum, { message: "Please enter valid adhar number !" })
    .required("Please enter your adhar number !"),
  farmerId: Yup.string()
    .min(5)
    .max(15)
    .required("Please enter your farmer-id !"),
});

export const buySchema = Yup.object({
  buyType: Yup.string().required("Please select the type-class !"),
  cName: Yup.string().min(4).required("Please specify the company/shop name !"),
  cAddress: Yup.string()
    .min(8)
    .required("Please fill the company address box !"),
  country: Yup.string()
    .min(4)
    .max(10)
    .required("Please specify the company country !"),
  city: Yup.string()
    .min(4)
    .max(20)
    .required("Please specify the company city !"),
  region: Yup.string()
    .min(4)
    .required("Please specify the company state or province !"),
  district: Yup.string()
    .min(4)
    .required("Please specify the company district !"),
  postalCode: Yup.string()
    .min(6)
    .matches(pincode, { message: "Please enter valid pin code !" })
    .required("Please enter your postal-code or pin-code !"),
  mobileNum: Yup.string()
    .min(10)
    .matches(contNum, { message: "Please enter valid contact number !" })
    .required("Please enter your mobile number !"),
  cMId: Yup.string().required("Please specify the company mail-id !"),
});

export const sinupSchema = Yup.object({
  remail: Yup.string().required("Please fill username !"),
  rpass: Yup.string()
    .min(5)
    .matches(passRule, { message: "Please create a stronger password" })
    .required("Please create password !"),
  rcpass: Yup.string()
    .oneOf([Yup.ref("rpass"), null], "Password should be matched")
    .required("Please confirm the password !"),
});

export const prdSchema = Yup.object({
  pType: Yup.string().required("Please select the product type !"),
  pName: Yup.string().required("Please choose the product !"),
  qGrade: Yup.string().required("Please select the prd-qlty-grade !"),
  qty: Yup.number().positive().required("Please specify the quantity !"),
  qtyRs: Yup.number().positive().required("Please enter the price per qty !"),
});
