import Image from "next/image";

export const Heroes = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
      <div className='flex items-center'>
        <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]'>
          <Image
            src='/potion.png'
            fill
            className='object-contain dark:hidden'
            alt='Documents'
          />
          <Image
            src='/potion-dark.png'
            fill
            className='object-contain hidden dark:block'
            alt='Documents'
          />
        </div>
      </div>
    </div>
  );
};
