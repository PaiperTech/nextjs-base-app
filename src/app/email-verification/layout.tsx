/* eslint-disable react/jsx-filename-extension */
import React from "react"

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex-col w-full h-full px-[10.62rem]">{children}</main>
  )
}
