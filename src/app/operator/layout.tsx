/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { OperatorProvider } from "@/components/operator/hooks/operator.hook"
import React from "react"

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <OperatorProvider>
      <main className="flex-col w-full h-full px-[10.62rem]">{children}</main>
    </OperatorProvider>
  )
}
