export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  icon?: React.ReactNode;
  isDisabled?: boolean;
  isPressed?: boolean;
}

export type TButtonStyledProps = Pick<IButtonProps, 'isPressed' | 'isDisabled'>;
