import { styled } from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invaild }) => ($invaild ? "#fee2e2" : "#d1d5db")};
  color: ${({ $invaild }) => ($invaild ? "ef4444" : "#374151")};
  border: 1px solid ${({ $invaild }) => ($invaild ? "#f73f3f" : " transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function CustomInput({ label, invaild, ...props }) {
  return (
    <p>
      <Label $invaild={invaild}>{label}</Label>
      <Input $invaild={invaild} {...props} />
    </p>
  );
}
