import AcceptPayments from "@/Components/Solutions/AcceptPayments";
import BenefitsMain from "@/Components/Solutions/BenefitsMain";
import BetterWay from "@/Components/Solutions/BetterWay";
import CustomisablePayment from "@/Components/Solutions/CustomisablePayment";
import QRPayment from "@/Components/Solutions/QRPayment";
import UPIPayment from "@/Components/Solutions/UPIPayment";
import WalletTransfer from "@/Components/Solutions/WalletTransfer";
import React from "react";

function page() {
  return (
    <div>
      <AcceptPayments />
      <WalletTransfer />
      <QRPayment />
      <BenefitsMain />
      <UPIPayment />
      <BetterWay />
      <CustomisablePayment />
    </div>
  );
}

export default page;
