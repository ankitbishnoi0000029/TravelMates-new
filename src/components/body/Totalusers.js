import React from "react";
import UserCardBanner from "./user_card";

function Totalusers() {
  return (
    <section>
      <div className="bg-[url('/banner/banner_bg.png')] bg-cover bg-center p-10">
        <div>
          <div className="p-6 text-center font-serif text-white">
            <h3 className="text-lg sm:text-xl md:text-2xl">
              About Our TravelMates
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              It All Starts With A Date
            </h1>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1200px] mx-auto items-center justify-center">
              <UserCardBanner />
              <UserCardBanner />
              <UserCardBanner />
              <UserCardBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Totalusers;
