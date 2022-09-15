import React, {useEffect, useRef, useState} from 'react';
import './collapsable-pane.less';

interface Props {
    collapsed: boolean;
    children: JSX.Element;
}

const CollapsablePaneReactComponent: React.FC<Props> = ({collapsed, children}) => {
    const ref = useRef<HTMLDivElement>(null);
    const dimensions = useRefDimensions(ref, {width: 175, height: 0});
    const [width, setWidth] = useState<string>(collapsed ? '0px' : 'auto');

    useEffect(() => {
        if (collapsed) {
            setWidth(`${ref.current?.scrollWidth}px`);
            setTimeout(() => setWidth('0px'), 10);
        } else {
            setWidth(`${ref.current?.scrollWidth}px`);
            setTimeout(() => setWidth('auto'), 1000);
        }
    }, [collapsed]);

    return (
        <div
            ref={ref}
            // styleName={`sidebar-default${collapsed ? ' sidebar-collapsed' : ''}`}
            style={{
                width,
                transition: 'width 1s linear',
            }}
        >
            {children}
        </div>
    );
};

const useRefDimensions = (
    ref: React.RefObject<HTMLElement>,
    initialDimensions: {width: number; height: number},
) => {
    const [dimensions, setDimensions] = useState(initialDimensions);
    React.useEffect(() => {
        if (ref.current) {
            new ResizeObserver(() => {
                const {current} = ref;
                setDimensions({
                    width: Math.round(current?.scrollWidth ?? initialDimensions.width),
                    height: Math.round(current?.scrollHeight ?? initialDimensions.height),
                });
            }).observe(ref.current);
        }
    }, [initialDimensions.height, initialDimensions.width, ref]);
    return dimensions;
};

export default CollapsablePaneReactComponent;
