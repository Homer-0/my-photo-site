export default function PageContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative px-2 sm:px-3 pt-0 ${className}`}>{children}</div>;
}
