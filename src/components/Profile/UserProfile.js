import React from "react";

function UserProfile() {
  return (
    <section className="bg-[#4a2184] text-white">
      <div className="container p-4">
        <div className="grid grid-cols-12 rounded-lg bg-[#391965] md:grid-cols-12 sm:grid-cols-1 gap-4">
          {/* Left Sidebar */}
          <div className="col-span-3  p-4">
            <div className=" rounded-lg bg-white text-black shadow-lg p-8 mt-5">
              <div className="flex items-center justify-center gap-6">
                <div className="flex flex-col">
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-pink-500">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Profile Picture"
                      className="object-cover w-full h-full"
                    />
                    <span className="absolute top-0 right-0 text-sm font-bold px-2 py-1 rounded-full">
                      ★
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold pt-2">Jenna Smith</h2>
                  <p className="text-gray-500 my-3">Art Director</p>
                  <button
                    className="bg-pink-500 text-white px-4 py-2 rounded-full mt-3"
                    aria-label="Follow Jenna Smith"
                  >
                    Follow
                  </button>
                </div>
              </div>
              <div className="flex justify-between py-6">
                <div>
                  <p className="text-xl font-bold">42</p>
                  <p className="text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="text-xl font-bold">1,302</p>
                  <p className="text-gray-500">Following</p>
                </div>
                <div>
                  <p className="text-xl font-bold">18K</p>
                  <p className="text-gray-500">Likes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Section */}
          <div className="col-span-9 p-4 text-white">
            <div className="h-48">
              <img
                src="user/bgpro.jpg"
                alt="Background Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="max-w-6xl mx-auto py-10 px-5">
              

              <section className="mt-8">
                <h3 className="text-xl font-semibold">My Posts</h3>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <button
                    className="text-blue-500 underline"
                    aria-label="View more collections"
                  >
                    View more
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
