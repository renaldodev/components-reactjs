import {
  primaryColor,
  warningColor,
  dangerColor,
  infoColor,
  errorColor,
  successColor
} from "./../material-kit";

const badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: { backgroundColor: primaryColor },
  warning: { backgroundColor: warningColor },
  info: { backgroundColor: infoColor },
  sucess: { backgroundColor: successColor },
  danger: { backgroundColor: dangerColor },
  error: { backgroundColor: errorColor }
};

export default badgeStyle;
