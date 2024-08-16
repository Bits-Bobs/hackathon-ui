import { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  additionalStyle?: string;
};

export const Button: FC<ButtonProps> = ({ children, additionalStyle }) => {
  return <button className={`rounded bg-[#CC8865] px-5 py-2 ${additionalStyle}`}>{children}</button>;
};
