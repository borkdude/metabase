import React from "react";
import PropTypes from "prop-types";
import AccountHeader from "../AccountHeader";
import { AccountContent } from "./AccountLayout.styled";

const propTypes = {
  ...AccountHeader.propTypes,
  children: PropTypes.node,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const AccountLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div>
      <AccountHeader {...props} />
      <AccountContent>{children}</AccountContent>
    </div>
  );
};

AccountLayout.propTypes = propTypes;

export default AccountLayout;