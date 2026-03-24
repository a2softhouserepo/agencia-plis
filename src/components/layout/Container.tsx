interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  padding?: string;
}

export default function Container({ children, id, className = "", padding }: ContainerProps) {
  return (
    <div id={id} className={`container-giz ${className}`} style={padding ? { padding } : undefined}>
      {children}
    </div>
  );
}
