"use client";

import { useUser } from "@clerk/clerk-react";

const HomePage = () => {
  const { user } = useUser();
  return (
    <div className='mx-36 my-16'>
      <h2 className='flex items-center justify-center text-g font-medium'>
        Welcome to {user?.firstName}&apos;s Potion
      </h2>
      <div>
        <p className='text-xs mt-12'>Recently visited </p>
        <div className='w-full mt-6'>
          <div className='grid grid-cols-2 md:grid-cols-5'>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
