import React from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

export interface PricingPlan {
  name: string;
  price: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  visitors: string;
  products: string;
}

interface PricingTableProps {
  plans: PricingPlan[];
  accentColor?: string;
}

const PricingTable: React.FC<PricingTableProps> = ({
  plans,
  accentColor = "#ed2a7b",
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`rounded-xl border ${plan.highlighted ? `border-2 border-[${accentColor}]` : "border-gray-200"} bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full`}
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            {plan.description && (
              <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
            )}
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-500 ml-1">/mo</span>
            </div>
          </div>

          <div className="space-y-4 mb-6 flex-grow">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                <Check className="h-3 w-3 text-gray-600" />
              </div>
              <span className="text-sm">{plan.visitors}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                <Check className="h-3 w-3 text-gray-600" />
              </div>
              <span className="text-sm">{plan.products}</span>
            </div>

            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                  <Check className="h-3 w-3 text-gray-600" />
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            className={`w-full bg-[${accentColor}] hover:bg-[${accentColor}]/90 text-white mt-auto`}
          >
            {plan.buttonText || "Get Started"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
