import { cn } from '../../utils/cn';

const Button = ({ as: Tag = 'button', variant = 'primary', className, children, ...rest }) => (
  <Tag className={cn(variant === 'primary' ? 'btn-primary' : 'btn-ghost', className)} {...rest}>
    {children}
  </Tag>
);

export default Button;
