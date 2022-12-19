import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { FaBlackTie } from "react-icons/fa";

const CustomMenu = React.forwardRef(
    ({ children, style, className }, ref) => {
        const [value, setValue] = useState("");

        return (
            <div
                ref={ref}
                style={style}
                className={className}
            >
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                        !value || child.props.children.toLowerCase().startsWith(value)
                    )}
                </ul>
            </div>
        );
    }
);

export default CustomMenu;