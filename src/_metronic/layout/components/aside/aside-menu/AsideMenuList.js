/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { ACCOUNT_URL, MANAGE_ORDERS_URL, OUTSTANDING_ORDERS_URL } from "../../../../_partials/constant/route";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
      "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>

        {/* Nhập phát sinh */}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(MANAGE_ORDERS_URL, false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to={MANAGE_ORDERS_URL}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Text/Bullet-list.svg")} />
            </span>
            <span className="menu-text">Quản lý đơn hàng</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Nhập phát sinh */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(OUTSTANDING_ORDERS_URL, false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to={OUTSTANDING_ORDERS_URL}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Clipboard-list.svg")} />
            </span>
            <span className="menu-text">Đơn hàng chưa thanh toán</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Nhập phát sinh */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(ACCOUNT_URL, false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to={ACCOUNT_URL}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
            </span>
            <span className="menu-text">Thông tin tài khoản</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}
