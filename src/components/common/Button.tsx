import styled from "styled-components";
import { ButtonSchema, ButtonSize } from "../../style/theme";

interface Props {
  children: React.ReactNode;
  size: ButtonSize;
  schema: ButtonSchema;
  disabled?: boolean;
  isLoading?: boolean;
}
const Button = ({ children, size, schema, disabled, isLoading }: Props) => {
  return (
    <Buttonstyle
      size={size}
      schema={schema}
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </Buttonstyle>
  );
};

const Buttonstyle = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  color: ${({ theme, schema }) => theme.buttonSchema[schema].color};
  background-color: ${({ theme, schema }) =>
    theme.buttonSchema[schema].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
`;

export default Button;
