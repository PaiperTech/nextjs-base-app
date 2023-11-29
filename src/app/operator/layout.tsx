import { OperatorProvider } from "@/components/operator/hooks/operator.hook"

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
