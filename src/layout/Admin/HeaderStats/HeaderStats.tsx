import React from "react";
import CardStats from "~/layout/Admin/CarsStats";
import { stats } from "~/constants/general";

export default function HeaderStats() {
  return (
    <>
      <div className="bg-blueGray-800 relative pb-32 pt-12 md:pt-32">
        <div className="mx-auto w-full px-4 md:px-10">
          <div>
            <div className="flex flex-wrap">
              {stats.map(
                ({
                  id,
                  statSubtitle,
                  statTitle,
                  statArrow,
                  statPercent,
                  statPercentColor,
                  statDescription,
                  statIconColor,
                  statIconName,
                }) => (
                  <div key={id} className="w-full px-4 lg:w-6/12 xl:w-3/12">
                    <CardStats
                      statSubtitle={statSubtitle}
                      statTitle={statTitle}
                      statArrow={statArrow}
                      statPercent={statPercent}
                      statPercentColor={statPercentColor}
                      statDescripiron={statDescription}
                      statIconName={statIconName}
                      statIconColor={statIconColor}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
