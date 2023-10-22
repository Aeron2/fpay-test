import AcceptPayments from "@/Components/Solutions/AcceptPayments";
import WalletTransfer from "@/Components/Solutions/WalletTransfer";
import React from "react";

function page() {
  return (
    <div>
      <AcceptPayments />
      <WalletTransfer />
    </div>
  );
}

export default page;
