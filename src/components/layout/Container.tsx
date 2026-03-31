interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  padding?: string;
  size?: "default" | "md" | "sm";
}

const sizeClassMap = {
  default: "container-giz",
  md: "container-giz-md",
  sm: "container-giz-sm",
};

export default function Container({ children, id, className = "", padding, size = "default" }: ContainerProps) {
  return (
    <div id={id} className={`${sizeClassMap[size]} ${className}`} style={padding ? { padding } : undefined}>
      {children}
    </div>
  );
}
