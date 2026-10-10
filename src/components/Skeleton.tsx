interface SkeletonProps {
  visible: boolean
}

function Bar({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-white/5 ${className}`} />
}

export function Skeleton({ visible }: SkeletonProps) {
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-50 flex flex-col overflow-hidden bg-[#0a0a0d] px-6 py-8 transition-opacity duration-500 md:px-10 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Bar className="h-6 w-20" />
        <div className="hidden items-center gap-8 md:flex">
          <Bar className="h-4 w-14" />
          <Bar className="h-4 w-14" />
          <Bar className="h-4 w-16" />
          <Bar className="h-4 w-14" />
        </div>
        <Bar className="h-9 w-24 rounded-full" />
      </div>

      <div className="mx-auto mt-16 w-full max-w-7xl flex-1">
        <Bar className="h-6 w-48" />
        <Bar className="mt-8 h-40 w-full md:h-56" />
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <Bar className="h-10 w-64" />
            <Bar className="h-10 w-72" />
          </div>
          <Bar className="h-12 w-56" />
        </div>
      </div>
    </div>
  )
}
