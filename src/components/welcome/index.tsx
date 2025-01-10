import BestSeller from "./best-seller-";
import BiteBetter from "./bite-better";
import Category from "./category";
import FAQ from "./faq";
import HowToUse from "./how-to-use";
import Introduction from "./introduction";
import Reviews from "./reviews";
import React from "react";

export default function WelcomePage() {
  return (
    <div className="bg-bgColor">
      <Introduction />
      <HowToUse />
      <Reviews />
      <Category />
      <BiteBetter />
      <BestSeller />
      <FAQ />
    </div>
  );
}
