//Notice that the remaning prop that is getting under props is onClick={() => handleSelect("...")}
export default function TabButton({ children, isSelected, ...props}) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
