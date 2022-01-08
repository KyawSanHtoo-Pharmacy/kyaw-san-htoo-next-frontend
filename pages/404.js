import Head from "next/head";
import { Error } from "@/ksh-components";
import { useContext } from "react";
import { CartStates } from "@/ksh-contexts/Cart-Context";
import { OrderSuccessPopup } from "@/ksh-components";
import { AnimatePresence } from "framer-motion";

export default function NotFoundPage() {
  const { showOrderSuccessPopup } = useContext(CartStates);
  return (
    <>
      <Head>
        <title>404 - Kyaw San Htoo - Pharmacy in Pathein</title>
      </Head>
      <AnimatePresence>
        {showOrderSuccessPopup && <OrderSuccessPopup />}
      </AnimatePresence>
      <Error
        message="ဒီပေ့ခ်ျ ကျွန်မတို့ဝက်ဘ်ဆိုက်မှာမရှိဘူး ကိုငြိမ်းမောင်"
        status="Error : 404 Page Not Found"
      />
    </>
  );
}
