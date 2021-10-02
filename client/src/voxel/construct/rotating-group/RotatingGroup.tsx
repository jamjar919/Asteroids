import React, {MutableRefObject, useRef} from "react";
import {GroupProps, useFrame} from "@react-three/fiber";

type RotatingGroupProps = {
    rotationVector: [number, number, number]
};

const RotatingGroup: React.FC<RotatingGroupProps> = (props) => {
    const {
        children,
        rotationVector
    } = props;

    const [x, y, z] = rotationVector;

    const ref: MutableRefObject<GroupProps | null> = useRef(null)

    useFrame(() => {
        if (ref.current !== null) {
            ref.current.rotation.x += x;
            ref.current.rotation.y += y;
            ref.current.rotation.z += z;
        }
    })

    return (
        <group ref={ref}>
            {children}
        </group>
    )
}

RotatingGroup.defaultProps = {
    rotationVector: [0, 0, 0]
}

export { RotatingGroup };