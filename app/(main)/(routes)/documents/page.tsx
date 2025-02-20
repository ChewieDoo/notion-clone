"use client";

import Image from "next/image";

import { useUser } from "@clerk/clerk-react"; // check to make sure this is working
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import { api } from "@/convex/_generated/api";

import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

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
      <h2 className='text-g font-medium'>
        Welcome to {user?.firstName}&apos;s Potion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className='h-4 w-4 mr-2' />
        Create a Potion
      </Button>
    </div>
  );
};

export default DocumentsPage;
