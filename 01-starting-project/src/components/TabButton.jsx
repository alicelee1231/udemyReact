export default function TabButton({ children, onSelect, isSelected }) {
  // export default function TabButton({ label }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
      {/* <button>{label}</button> */}
    </li>
  );
}
