export default function PageContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative px-0 sm:px-1 pt-0 ${className}`}>{children}</div>;
}
