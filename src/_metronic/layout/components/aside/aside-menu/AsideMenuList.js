/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { URL_BOOKKEEPING, URL_CATEGORY, URL_FINANCIAL_REPORT, URL_INCURRED_COST, URL_SYSTEM_SETTINGS } from "../../../../_assets/js/components/constant/route";

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

        {/* Báo cáo tài chính */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            URL_FINANCIAL_REPORT.BASE_URL,
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to={URL_FINANCIAL_REPORT.BASE_URL}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-4-blocks.svg")} />
            </span>
            <span className="menu-text">Báo cáo tài chính</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Báo cáo tài chính</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    URL_FINANCIAL_REPORT.CASH_FLOW
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={URL_FINANCIAL_REPORT.CASH_FLOW}>
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Báo cáo dòng tiền</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    URL_FINANCIAL_REPORT.PROFIT_LOSS
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={URL_FINANCIAL_REPORT.PROFIT_LOSS}>
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Báo cáo lãi lỗ</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    URL_FINANCIAL_REPORT.DEBT
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to={URL_FINANCIAL_REPORT.DEBT}
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Báo cáo công nợ</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Nhập phát sinh */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(URL_INCURRED_COST, false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to={URL_INCURRED_COST}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Edit.svg")} />
            </span>
            <span className="menu-text">Nhập phát sinh</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Sổ kế toán */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            URL_BOOKKEEPING.BASE_URL,
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to={URL_BOOKKEEPING.BASE_URL}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Book.svg")} />
            </span>
            <span className="menu-text">Sổ kế toán</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Sổ kế toán</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    URL_BOOKKEEPING.DIARY
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={URL_BOOKKEEPING.DIARY}>
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Nhật ký kế toán</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    URL_BOOKKEEPING.CUSTOMER_DEBT
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={URL_BOOKKEEPING.CUSTOMER_DEBT}>
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Công nợ khách hàng</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    URL_BOOKKEEPING.SUPLIER_DEBT
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to={URL_BOOKKEEPING.SUPLIER_DEBT}
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Công nợ nhà cung cấp</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Danh mục */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            URL_CATEGORY.BASE_URL,
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to={URL_CATEGORY.BASE_URL}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Text/Bullet-list.svg")} />
            </span>
            <span className="menu-text">Danh mục</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Danh mục</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    URL_CATEGORY.COST
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={URL_CATEGORY.COST}>
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Danh mục chi phí</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    URL_CATEGORY.RENUEVE
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={URL_CATEGORY.RENUEVE}>
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Danh mục doanh thu</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item menu-item-submenu ${getMenuItemActive(
                    URL_CATEGORY.COUNTERPARTY.BASE_COUNTERPARTY_URL,
                    true
                  )}`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to={URL_CATEGORY.COUNTERPARTY.BASE_COUNTERPARTY_URL}
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Danh mục đối tác</span>
                    <i className="menu-arrow" />
                  </NavLink>
                  <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item  ${getMenuItemActive(
                          URL_CATEGORY.COUNTERPARTY.CUSTOMER
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to={URL_CATEGORY.COUNTERPARTY.CUSTOMER}
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Khách hàng</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          URL_CATEGORY.COUNTERPARTY.DELIVERY_COUNTERPARTY
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to={URL_CATEGORY.COUNTERPARTY.DELIVERY_COUNTERPARTY}
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Đối tác giao hàng</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          URL_CATEGORY.COUNTERPARTY.SUPLIER
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to={URL_CATEGORY.COUNTERPARTY.SUPLIER}
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Nhà cung cấp</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}
                    </ul>
                  </div>
                </li>
                {/*end::2 Level*/}
              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Cài đặt hệ thống */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            URL_SYSTEM_SETTINGS.BASE_URL,
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to={URL_SYSTEM_SETTINGS.BASE_URL}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Settings-2.svg")} />
            </span>
            <span className="menu-text">Cài đặt hệ thống</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Cài đặt hệ thống</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    URL_SYSTEM_SETTINGS.ACCOUNT_SETTINGS
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={URL_SYSTEM_SETTINGS.ACCOUNT_SETTINGS}>
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Cài đặt tài khoản</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}
