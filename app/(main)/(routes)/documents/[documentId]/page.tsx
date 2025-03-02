"use client";

import { useMutation, useQuery } from "convex/react";

import { use } from "react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/app/(main)/_components/toolbar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import Editor from "@/components/editor";

interface DocumentIdPageProps {
  params: Promise<{
    documentId: string;
  }>;
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const unwrappedParams = use(params);

  // Convert documentId to the appropriate type
  const documentId = unwrappedParams.documentId as Id<"documents">;

  const document = useQuery(api.documents.getById, {
    documentId,
  });

  // Update the backend to reflect changes made in the editor
  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: documentId,
      content,
    });
  };

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className='md:max-w-3xl lg:max-w-4xl mx-auto mt-10'>
          <div className='space-y-4 pl-8 pt-4'>
            <Skeleton className='h-14 w-[50%]' />
            <Skeleton className='h-4 w-[80%]' />
            <Skeleton className='h-14 w-[40%]' />
            <Skeleton className='h-14 w-[60%]' />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <div className='pb-40'>
      <Cover url={document.coverImage} />
      <div className='md:max-w-3xl lg:max-w-4xl mx-auto'>
        <Toolbar initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
