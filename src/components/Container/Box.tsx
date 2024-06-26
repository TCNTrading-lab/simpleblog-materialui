export function GrayBox({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col bg-bg-primary p-3 rounded-lg space-y-2">
      <h5 className="mb-1">{title}</h5>
      {children}
    </div>
  );
}

export function WhiteBox({
  children,
  hoverable = false,
}: {
  children: React.ReactNode;
  hoverable?: boolean;
}) {
  return (
    <div
      className={
        "flex flex-col bg-bg p-[1px] rounded-lg space-y-2 shadow-md" +
        (hoverable ? " hover:bg-bg-hover" : "")
      }
    >
      {children}
    </div>
  );
}
