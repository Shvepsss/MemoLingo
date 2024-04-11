import { ThemeProvider } from './ThemeProvider';

type ProviderProps = {
  children: React.ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
