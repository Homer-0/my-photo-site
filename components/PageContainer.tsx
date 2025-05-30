export default function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="relative px-4 sm:px-6 pt-10">{children}</div>;
}