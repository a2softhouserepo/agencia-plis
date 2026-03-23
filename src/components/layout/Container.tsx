interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function Container({ children, id, className = "" }: ContainerProps) {
  return (
    <div id={id} className={`container-giz ${className}`}>
      {children}
    </div>
  );
}
