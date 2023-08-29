type TechBadgeProps = {
  name: string;
};

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-violet-400 bg-violet-900/80 text-sm py- px-3 rounded-lg">
      {name}
    </span>
  );
};
