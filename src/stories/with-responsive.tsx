import * as React from "react";
import { useBreakpoints } from "./use-media-query";
interface Breakpoints {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
}

interface Props {
  size: "small" | "medium" | "large";
  variant: "big" | "tall" | "extra massive";
  dark: boolean;
  onClick?: (e: Event) => void;
}

// {'xs':'small', 'l': 'medium'}
// typeof employee[Keys]
type MapToBeakpoints<T> = {
  [K in keyof Breakpoints]?: T;
};

type ResponsiveProps<T extends unknown, K extends keyof T> = {
  [P in keyof Pick<T, K>]: MapToBeakpoints<T[P]> | T[P];
} & {
  [P in keyof Omit<T, K>]: T[P];
};
export const WithResponsive = <Type, Key extends keyof Type>(
  WrappedComponent: React.FC<Type>,
  responsiveProps: Key[]
) => {
  function WithResponsiveWrapper(props: ResponsiveProps<Type, Key>) {
    const { active } = useBreakpoints();

    const modifiedProps = { ...props };
    // Process the responsive props to extract responsive values

    for (const responsiveProp of responsiveProps) {
      if (props[responsiveProp]) {
        modifiedProps[responsiveProp] = (props[responsiveProp] as any)[active];
      }
    }

    return <WrappedComponent {...(modifiedProps as Type)} />;
  }
  WithResponsiveWrapper.displayName = `WithResponsive(${
    WrappedComponent?.displayName || WrappedComponent.name
  })`;
  return WithResponsiveWrapper;
};
