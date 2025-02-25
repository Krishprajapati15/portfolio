"use client";

import { ReactNode } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Dialog({ open, onClose, children }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#6e57e0] p-6 rounded-lg shadow-lg w-96 text-center">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[#ff6bcb] text-white rounded-lg hover:bg-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function DialogContent({ children }: { children: ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export function DialogTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-bold uppercase">{children}</h2>;
}

export function DialogDescription({ children }: { children: ReactNode }) {
  return <p className="text-black">{children}</p>;
}
