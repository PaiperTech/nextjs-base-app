/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import Header from "@/components/Header/Header"
import React, { useEffect, useState } from "react"

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, []);
  return (
    <>
      {isClient ? 
        <><Header selected={3} /><main className="flex-col w-full min-h-screen px-[10.62rem] bg-[#F1F8FE]">{children}</main></>
        : <div className="flex items-center justify-center h-screen bg-[#F1F8FE]"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500" /></div>
      }
    </>
  )
}
