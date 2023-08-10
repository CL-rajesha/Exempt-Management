import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateActiveIconTrueBadge from "./StateActiveIconTrueBadge";
import styles from "./FeedbackForm.module.css";
const FeedbackForm = () => {
  const navigate = useNavigate();

  const onNavItemClick = useCallback(() => {
    navigate("/frame-20");
  }, [navigate]);

  return (
    <div className={styles.sideNav}>
      <div className={styles.brandNavList}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.navList}>
          <StateActiveIconTrueBadge
            dimension="/home.svg"
            componentIconUrl="Dashboard"
            componentLabelSize="/arrow--right-2.svg"
            trailingIconBadge={false}
            stateActiveIconTrueBadgePosition="unset"
            stateActiveIconTrueBadgeBackgroundColor="#667a8a"
            stateActiveIconTrueBadgeWidth="220.75px"
            stateActiveIconTrueBadgePadding="0px 6.37538480758667px"
            stateActiveIconTrueBadgeMargin="0"
            stateActiveIconTrueBadgeCursor="pointer"
            homeIconWidth="25.5px"
            homeIconHeight="25.5px"
            dashboardFontSize="12.75px"
            dashboardLineHeight="19.13px"
            dashboardFontWeight="bold"
            dashboardColor="#eff2f4"
            numberNotificationBadgeBackgroundColor="#e9f5fe"
            numberNotificationBadgeWidth="19.13px"
            numberNotificationBadgeHeight="19.13px"
            divLineHeight="23.11px"
            divColor="#1e252b"
            arrowRight2Width="19.13px"
            arrowRight2Height="19.13px"
            onNavItemClick={onNavItemClick}
          />
          <StateActiveIconTrueBadge
            dimension="/edit-square.svg"
            componentIconUrl="Administration setup"
            componentLabelSize="/arrow--right-21.svg"
            trailingIconBadge={false}
            stateActiveIconTrueBadgePosition="unset"
            stateActiveIconTrueBadgeBackgroundColor="unset"
            stateActiveIconTrueBadgeWidth="220.75px"
            stateActiveIconTrueBadgePadding="0px 6.37538480758667px"
            stateActiveIconTrueBadgeMargin="unset"
            stateActiveIconTrueBadgeCursor="unset"
            homeIconWidth="25.5px"
            homeIconHeight="25.5px"
            dashboardFontSize="12.75px"
            dashboardLineHeight="19.13px"
            dashboardFontWeight="unset"
            dashboardColor="#fff"
            numberNotificationBadgeBackgroundColor="#fff"
            numberNotificationBadgeWidth="19.13px"
            numberNotificationBadgeHeight="19.13px"
            divLineHeight="23.11px"
            divColor="#0c7fda"
            arrowRight2Width="19.13px"
            arrowRight2Height="19.13px"
          />
          <StateActiveIconTrueBadge
            dimension="/image.svg"
            componentIconUrl="Change Request"
            componentLabelSize="/arrow--right-22.svg"
            trailingIconBadge={false}
            stateActiveIconTrueBadgePosition="unset"
            stateActiveIconTrueBadgeBackgroundColor="transparent"
            stateActiveIconTrueBadgeWidth="220.75px"
            stateActiveIconTrueBadgePadding="0px 6.37538480758667px"
            stateActiveIconTrueBadgeMargin="unset"
            stateActiveIconTrueBadgeCursor="pointer"
            homeIconWidth="25.5px"
            homeIconHeight="25.5px"
            dashboardFontSize="12.75px"
            dashboardLineHeight="19.13px"
            dashboardFontWeight="unset"
            dashboardColor="#eff2f4"
            numberNotificationBadgeBackgroundColor="#e9f5fe"
            numberNotificationBadgeWidth="19.13px"
            numberNotificationBadgeHeight="19.13px"
            divLineHeight="23.11px"
            divColor="#1e252b"
            arrowRight2Width="19.13px"
            arrowRight2Height="19.13px"
          />
          <StateActiveIconTrueBadge
            dimension="/document.svg"
            componentIconUrl="Health Care Entities"
            componentLabelSize="/arrow--right-23.svg"
            trailingIconBadge={false}
            stateActiveIconTrueBadgePosition="unset"
            stateActiveIconTrueBadgeBackgroundColor="transparent"
            stateActiveIconTrueBadgeWidth="220.75px"
            stateActiveIconTrueBadgePadding="0px 6.37538480758667px"
            stateActiveIconTrueBadgeMargin="unset"
            stateActiveIconTrueBadgeCursor="pointer"
            homeIconWidth="25.5px"
            homeIconHeight="25.5px"
            dashboardFontSize="12.75px"
            dashboardLineHeight="19.13px"
            dashboardFontWeight="unset"
            dashboardColor="#eff2f4"
            numberNotificationBadgeBackgroundColor="#e9f5fe"
            numberNotificationBadgeWidth="19.13px"
            numberNotificationBadgeHeight="19.13px"
            divLineHeight="23.11px"
            divColor="#1e252b"
            arrowRight2Width="19.13px"
            arrowRight2Height="19.13px"
          />
          <StateActiveIconTrueBadge
            dimension="/category.svg"
            componentIconUrl="Compliance Management"
            componentLabelSize="/arrow--right-24.svg"
            trailingIconBadge={false}
            stateActiveIconTrueBadgePosition="unset"
            stateActiveIconTrueBadgeBackgroundColor="unset"
            stateActiveIconTrueBadgeWidth="220.75px"
            stateActiveIconTrueBadgePadding="0px 6.37538480758667px"
            stateActiveIconTrueBadgeMargin="unset"
            stateActiveIconTrueBadgeCursor="unset"
            homeIconWidth="25.5px"
            homeIconHeight="25.5px"
            dashboardFontSize="12.75px"
            dashboardLineHeight="19.13px"
            dashboardFontWeight="unset"
            dashboardColor="#eff2f4"
            numberNotificationBadgeBackgroundColor="#e9f5fe"
            numberNotificationBadgeWidth="19.13px"
            numberNotificationBadgeHeight="19.13px"
            divLineHeight="23.11px"
            divColor="#1e252b"
            arrowRight2Width="19.13px"
            arrowRight2Height="19.13px"
          />
          <StateActiveIconTrueBadge
            dimension="/bag.svg"
            componentIconUrl="Audit Management"
            componentLabelSize="/arrow--right-25.svg"
            trailingIconBadge={false}
            stateActiveIconTrueBadgePosition="unset"
            stateActiveIconTrueBadgeBackgroundColor="transparent"
            stateActiveIconTrueBadgeWidth="220.75px"
            stateActiveIconTrueBadgePadding="0px 6.37538480758667px"
            stateActiveIconTrueBadgeMargin="unset"
            stateActiveIconTrueBadgeCursor="pointer"
            homeIconWidth="25.5px"
            homeIconHeight="25.5px"
            dashboardFontSize="12.75px"
            dashboardLineHeight="19.13px"
            dashboardFontWeight="unset"
            dashboardColor="#eff2f4"
            numberNotificationBadgeBackgroundColor="#e9f5fe"
            numberNotificationBadgeWidth="19.13px"
            numberNotificationBadgeHeight="19.13px"
            divLineHeight="23.11px"
            divColor="#1e252b"
            arrowRight2Width="19.13px"
            arrowRight2Height="19.13px"
          />
          <StateActiveIconTrueBadge
            dimension="/3-user.svg"
            componentIconUrl="Contact Management"
            componentLabelSize="/arrow--right-26.svg"
            trailingIconBadge={false}
            stateActiveIconTrueBadgePosition="unset"
            stateActiveIconTrueBadgeBackgroundColor="transparent"
            stateActiveIconTrueBadgeWidth="220.75px"
            stateActiveIconTrueBadgePadding="0px 6.37538480758667px"
            stateActiveIconTrueBadgeMargin="unset"
            stateActiveIconTrueBadgeCursor="pointer"
            homeIconWidth="25.5px"
            homeIconHeight="25.5px"
            dashboardFontSize="12.75px"
            dashboardLineHeight="19.13px"
            dashboardFontWeight="unset"
            dashboardColor="#eff2f4"
            numberNotificationBadgeBackgroundColor="#e9f5fe"
            numberNotificationBadgeWidth="19.13px"
            numberNotificationBadgeHeight="19.13px"
            divLineHeight="23.11px"
            divColor="#1e252b"
            arrowRight2Width="19.13px"
            arrowRight2Height="19.13px"
          />
          <StateActiveIconTrueBadge
            dimension="/setting.svg"
            componentIconUrl="Exemption"
            componentLabelSize="/arrow--right-27.svg"
            trailingIconBadge={false}
            stateActiveIconTrueBadgePosition="unset"
            stateActiveIconTrueBadgeBackgroundColor="unset"
            stateActiveIconTrueBadgeWidth="220.75px"
            stateActiveIconTrueBadgePadding="0px 6.37538480758667px"
            stateActiveIconTrueBadgeMargin="unset"
            stateActiveIconTrueBadgeCursor="unset"
            homeIconWidth="25.5px"
            homeIconHeight="25.5px"
            dashboardFontSize="12.75px"
            dashboardLineHeight="19.13px"
            dashboardFontWeight="unset"
            dashboardColor="#eff2f4"
            numberNotificationBadgeBackgroundColor="#e9f5fe"
            numberNotificationBadgeWidth="19.13px"
            numberNotificationBadgeHeight="19.13px"
            divLineHeight="23.11px"
            divColor="#1e252b"
            arrowRight2Width="19.13px"
            arrowRight2Height="19.13px"
          />
          <StateActiveIconTrueBadge
            dimension="/filter.svg"
            componentIconUrl="Feed Back"
            componentLabelSize="/arrow--right-28.svg"
            trailingIconBadge={false}
            stateActiveIconTrueBadgePosition="unset"
            stateActiveIconTrueBadgeBackgroundColor="transparent"
            stateActiveIconTrueBadgeWidth="220.75px"
            stateActiveIconTrueBadgePadding="0px 6.37538480758667px"
            stateActiveIconTrueBadgeMargin="unset"
            stateActiveIconTrueBadgeCursor="pointer"
            homeIconWidth="25.5px"
            homeIconHeight="25.5px"
            dashboardFontSize="12.75px"
            dashboardLineHeight="19.13px"
            dashboardFontWeight="unset"
            dashboardColor="#eff2f4"
            numberNotificationBadgeBackgroundColor="#e9f5fe"
            numberNotificationBadgeWidth="19.13px"
            numberNotificationBadgeHeight="19.13px"
            divLineHeight="23.11px"
            divColor="#1e252b"
            arrowRight2Width="19.13px"
            arrowRight2Height="19.13px"
          />
        </div>
      </div>
      <div className={styles.sideNavChild} />
      <div className={styles.sideNavItem} />
    </div>
  );
};

export default FeedbackForm;
