"use client";

import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
}

const Editor = ({ onChange, initialContent }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    uploadFile: handleUpload,
  });

  const handleEditorChange = () => {
    const content = JSON.stringify(editor.document, null, 2);
    onChange(content);
  };

  return (
    <div>
      <BlockNoteView
        editor={editor}
        onChange={handleEditorChange}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;
