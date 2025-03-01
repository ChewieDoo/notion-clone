"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "convex/react";
import { Clock, FileIcon } from "lucide-react";

import { useRouter } from "next/navigation";

import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";

const HomePage = () => {
  const { user } = useUser();
  const router = useRouter();
  const documents = useQuery(api.documents.getByLastEdit);

  const sortedDocuments = documents?.sort((a, b) => {
    const lastModifiedA = a.lastModified ?? a._creationTime;
    const lastModifiedB = b.lastModified ?? b._creationTime;
    return (
      new Date(lastModifiedB).getTime() - new Date(lastModifiedA).getTime()
    );
  });

  const formatDate = (timestamp: number) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInSec = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSec < 60) {
      return "Just now";
    } else if (diffInSec < 3600) {
      const minutes = Math.floor(diffInSec / 60);
      return `${minutes}m ago`;
    } else if (diffInSec < 86400) {
      const hours = Math.floor(diffInSec / 3600);
      return `${hours}h ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  };

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  if (documents === undefined) {
    return (
      <div className='lg:mx-36 md:mx-24 mx-14 my-16'>
        <h2 className='flex items-center justify-center text-lg font-medium'>
          Welcome to {user?.firstName}&apos;s Potion
        </h2>

        <div className='mt-8 flex flex-col justify-center items-center h-full space-y-4'>
          <Skeleton className='w-[150px] h-[150px]' />
        </div>

        <div className='-mt-6'>
          <div className='flex items-center space-x-2 text-muted-foreground'>
            <Clock size='12px' className='-mb-[46px]' />
            <p className='text-xs mt-12'>Recently visited</p>
          </div>

          <div className='w-full mt-6'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
              {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className='w-[144px] h-[144px] rounded-lg'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='lg:mx-36 md:mx-24 mx-14 my-16'>
      <h2 className='flex items-center justify-center text-lg font-medium'>
        Welcome to {user?.firstName}&apos;s Potion
      </h2>

      <div className='mt-8 flex flex-col justify-center items-center h-full space-y-4'>
        <Image
          src='/empty.png'
          height='150'
          width='150'
          alt='Empty'
          className='dark:hidden'
        />
        <Image
          src='/empty-dark.png'
          height='150'
          width='150'
          alt='Empty'
          className='hidden dark:block'
        />
      </div>

      <div className='-mt-6'>
        <div className='flex items-center space-x-2 text-muted-foreground'>
          <Clock size='12px' className='-mb-[46px]' />
          <p className='text-xs mt-12'>Recently visited</p>
        </div>

        <div className='w-full mt-6'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {sortedDocuments?.map((document) => (
              <div
                key={document._id}
                className='relative mb-8 w-[144px] h-[144px]  outline outline-[0.75px] 
                outline-neutral-200 dark:outline-neutral-800 dark:bg-secondary rounded-lg p-4 flex flex-col flex-shrink-0 cursor-pointer 
                 hover:outline hover:outline-[0.75px] dark:hover:outline-neutral-700 hover:outline-neutral-300'
                onClick={() => onRedirect(document._id)}>
                <div className='absolute top-0 left-0 w-full h-[30%]'>
                  {document.coverImage ? (
                    <img
                      src={document.coverImage}
                      alt='Cover'
                      className='w-full h-full object-cover rounded-t-lg'
                    />
                  ) : (
                    <div className='w-full h-full rounded-t-lg bg-neutral-50 dark:bg-neutral-800'></div>
                  )}
                </div>
                <div className='relative z-10 mt-10'>
                  {document.icon ?? (
                    <FileIcon className='text-muted-foreground' />
                  )}
                </div>
                <p className='relative z-10 text-sm mt-1'>{document.title}</p>
                <p className='text-xs text-muted-foreground mt-auto'>
                  {formatDate(document.lastModified ?? document._creationTime)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
