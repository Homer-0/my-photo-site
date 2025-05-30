export default function PageContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative px-4 sm:px-6 pt-0 ${className}`}>{children}</div>;
}