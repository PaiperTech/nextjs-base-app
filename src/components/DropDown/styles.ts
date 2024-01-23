// styles.ts
import { StylesConfig } from 'react-select';

interface CustomStylesProps {
  width?: string;
}

export const getCustomStyles = ({ width }: CustomStylesProps): StylesConfig => ({
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: 'var(--gray-6, --gray-6)',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '150%',
      outline: 'none',
      background: 'none',
    }),
    control: (baseStyles) => ({
      ...baseStyles,
      borderRadius: '8px',
      border: '1px solid var(--gray-5)',
      padding: '6px 1px',
      color: '#C4C4C4',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '150%',
      outline: 'none',
      width: width || '350px',
      height: '48px',
      display: 'flex',
      background: '#FFFF',
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      borderRadius: '8px',
      padding: '6px 15px',
      color: 'var(--gray-6, --gray-6)',
      fontFamily: 'Inter, sans-serif',
      fontSize: '10px',
      fontWeight: '400',
      lineHeight: '200%',
      outline: 'none',
    }),
  });

export const theme = (customTheme: any) => ({
  ...customTheme,
  borderRadius: 0,
  borderColor: 'var(--gray-6, #6E7274)',
  colors: {
    ...customTheme.colors,
    primary25: 'rgba(148, 148, 148, 0.1)',
    primary: 'var(--secondary)',
  },
});
