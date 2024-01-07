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
  variant?: "primary" | "secondary";
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
  productTitle: string;
  productText: string;
  data: { title: string; content: string; imageUrl: string }[];
}

interface IModal {
  title?: string;
  show: boolean;
  className?: string;
  onModalClose: () => void;
  children: React.ReactNode;
}
