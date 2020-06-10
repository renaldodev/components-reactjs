import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import badgeStyle from "../../assets/jss/material-kit/components/badgeStyle";

const useStyle = makeStyles(badgeStyle);
export default function Badge({ className, color, children, ...rest }) {
  const classes = useStyle();
  return (
    <span
      className={classes.badge + " " + classes[color] + " " + className}
      {...rest}
    >
      {children}
    </span>
  );
}

Badge.defaultProps = {
  className: "",
  color: "primary"
};

Badge.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "info", "warning", "danger", "error"]),
  children: PropTypes.node
};
