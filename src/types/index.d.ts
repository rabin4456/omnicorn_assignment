interface IHeader {
  children: React.ReactNode;
  variant?: "sm" | "md" | "lg";
  className?: string;
}

interface ITypography {
  children: React.ReactNode;
  variant?: "sm" | "md";
  className?: string;
}

interface IAccordion {
  children: React.ReactNode;
  className?: string;
  buttonTitle: string;
  imageUrl: string;
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  buttonType?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  className?: string;
}

interface IProductCard {
  title: string;
  imageUrl: string;
  content: string;
  handleButtonClick: () => void;
}

interface IProductContent {
  title: string;
  content: string;
  data: { title: string; content: string; imageUrl: string }[];
}
