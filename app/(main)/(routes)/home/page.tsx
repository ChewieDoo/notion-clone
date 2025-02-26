"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "convex/react";
import { Clock, FileIcon } from "lucide-react";

const HomePage = () => {
  const { user } = useUser();
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

  return (
    <div className='lg:mx-36 md:mx-24 sm:mx-12 xs:mx-8 my-16'>
      <h2 className='flex items-center justify-center text-lg font-medium'>
        Welcome to {user?.firstName}&apos;s Potion
      </h2>
      <div>
        <div className='flex items-center space-x-2 text-muted-foreground'>
          <Clock size='12px' className='-mb-[46px]' />
          <p className='text-xs mt-12'>Recently visited</p>
        </div>

        <div className='w-full mt-6'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {sortedDocuments?.map((document) => (
              <div
                key={document._id}
                className='relative mb-8 w-[144px] h-[144px] bg-secondary rounded-lg p-4 flex flex-col flex-shrink-0'>
                <div className='absolute top-0 left-0 w-full h-[45%]'>
                  {document.coverImage ? (
                    <img
                      src={document.coverImage}
                      alt='Cover'
                      className='w-full h-full object-cover rounded-t-lg'
                    />
                  ) : (
                    <div className='w-full h-full dark:bg-neutral-600 bg-neutral-300 rounded-t-lg'></div>
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
