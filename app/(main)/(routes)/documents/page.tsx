"use client";

import Image from "next/image";

import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import HomePage from "@/components/home";

import { api } from "@/convex/_generated/api";

import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const documents = useQuery(api.documents.getByLastEdit);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Fail to create a new note.",
    });
  };

  if (documents === undefined) {
    return <Skeleton />;
  }

  if (documents.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center h-full space-y-4'>
        <Image
          src='/empty.png'
          height='300'
          width='300'
          alt='Empty'
          className='dark:hidden'
        />
        <Image
          src='/empty-dark.png'
          height='300'
          width='300'
          alt='Empty'
          className='hidden dark:block'
        />
        <h2 className='text-lg font-medium'>
          Welcome to {user?.firstName}&apos;s Potion
        </h2>
        <Button onClick={onCreate}>
          <PlusCircle className='h-4 w-4 mr-2' />
          Create a Potion
        </Button>
      </div>
    );
  }

  return <HomePage />;
};

export default DocumentsPage;
