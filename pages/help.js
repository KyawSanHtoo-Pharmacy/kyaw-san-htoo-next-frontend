import Head from "next/head";
import { useContext } from "react";
import { CartStates } from "@/ksh-contexts/Cart-Context";
import { Help, OrderSuccessPopup } from "@/ksh-components";
import { AnimatePresence } from "framer-motion";

export default function HelpPage() {
  const { showOrderSuccessPopup } = useContext(CartStates);
  return (
    <>
      <Head>
        <title> Help - Kyaw San Htoo - Pharmacy in Pathein</title>
      </Head>
      <AnimatePresence>
        {showOrderSuccessPopup && <OrderSuccessPopup />}
      </AnimatePresence>
      <Help />
    </>
  );
}
