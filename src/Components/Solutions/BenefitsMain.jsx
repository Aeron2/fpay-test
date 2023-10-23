import React from 'react'
import Benefits from './Benefits';
import Heading from '../heading/Heading';
import Data from '@/Data/Solutions/solutions.json';
function BenefitsMain() {
    const staticData = Data["benefits-staticQR"];
    const dynamicData = Data["benefits-dynamicQR"];
  return (
    <div>
      <div className="">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <Heading main={staticData.main} redMain={staticData.redMain} />
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {staticData.benefits.map((benefit, i) => (
              <Benefits
                key={"Static QR" + benefit.title}
                title={benefit.title}
                description={benefit.description}
                imageSrc={benefit.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <Heading main={dynamicData.main} redMain={dynamicData.redMain} />
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {dynamicData.benefits.map((benefit, i) => (
              <Benefits
                key={"Dynamic QR" + benefit.title}
                title={benefit.title}
                description={benefit.description}
                imageSrc={benefit.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsMain