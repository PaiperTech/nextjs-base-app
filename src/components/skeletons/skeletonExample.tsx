/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonExample() {
    return (
        <>
            <Skeleton className="h-[200px] w-[380px]" />
            <Skeleton className="h-[200px] w-[380px]" />
            <Skeleton className="h-[200px] w-[380px]" />
            <Skeleton className="h-[200px] w-[380px]" />
        </>
    )
}
