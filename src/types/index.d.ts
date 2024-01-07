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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
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
  btnClassName?:string;
  handleCardClick?: () => void;
}

interface IProductInfoCard {
  title: string;
  content: string;
  productModalText: string;
  productModalTitle: string;
  data: { title: string; desc: string; imageUrl: string }[];
}

interface IModal {
  title?: string;
  show: boolean;
  className?: string;
  onModalClose: () => void;
  children: React.ReactNode;
}

interface IProducts {
  id: string | number;
  title: string;
  desc: string;
  products: { title: string; imageUrl: string; desc: string }[];
}
