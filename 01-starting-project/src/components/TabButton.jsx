export default function TabButton({ children, onSelect }) {
  // export default function TabButton({ label }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
      {/* <button>{label}</button> */}
    </li>
  );
}
