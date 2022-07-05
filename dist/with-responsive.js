import * as React from "react";
import { useBreakpoints } from "./use-media-query";
export const WithResponsive = (WrappedComponent, responsiveProps) => {
    function WithResponsiveWrapper(props) {
        const { active } = useBreakpoints();
        const modifiedProps = { ...props };
        // Process the responsive props to extract responsive values
        console.log({ props });
        for (const responsiveProp of responsiveProps) {
            if (props[responsiveProp]) {
                modifiedProps[responsiveProp] = props[responsiveProp][active];
            }
        }
        return React.createElement(WrappedComponent, { ...modifiedProps });
    }
    WithResponsiveWrapper.displayName = `WithResponsive(${WrappedComponent?.displayName || WrappedComponent.name})`;
    return WithResponsiveWrapper;
};
