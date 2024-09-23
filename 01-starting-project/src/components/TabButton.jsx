export default function TabButton({ children, isSelected, ...props }) {
  // export default function TabButton({ label }) {
  return (
    <li style={{ display: "inline-block" }}>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
      {/* <button>{label}</button> */}
    </li>
  );
}
