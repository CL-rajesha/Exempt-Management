import { useMemo } from "react";
import styles from "./StateActiveIconTrueBadge.module.css";
const StateActiveIconTrueBadge = ({
  dimension,
  componentIconUrl,
  componentLabelSize,
  trailingIconBadge,
  stateActiveIconTrueBadgePosition,
  stateActiveIconTrueBadgeBackgroundColor,
  stateActiveIconTrueBadgeWidth,
  stateActiveIconTrueBadgePadding,
  stateActiveIconTrueBadgeMargin,
  stateActiveIconTrueBadgeCursor,
  homeIconWidth,
  homeIconHeight,
  dashboardFontSize,
  dashboardLineHeight,
  dashboardFontWeight,
  dashboardColor,
  numberNotificationBadgeBackgroundColor,
  numberNotificationBadgeWidth,
  numberNotificationBadgeHeight,
  divLineHeight,
  divColor,
  arrowRight2Width,
  arrowRight2Height,
  onNavItemClick,
}) => {
  const stateActiveIconTrueBadgeStyle = useMemo(() => {
    return {
      position: stateActiveIconTrueBadgePosition,
      backgroundColor: stateActiveIconTrueBadgeBackgroundColor,
      width: stateActiveIconTrueBadgeWidth,
      padding: stateActiveIconTrueBadgePadding,
      margin: stateActiveIconTrueBadgeMargin,
      cursor: stateActiveIconTrueBadgeCursor,
    };
  }, [
    stateActiveIconTrueBadgePosition,
    stateActiveIconTrueBadgeBackgroundColor,
    stateActiveIconTrueBadgeWidth,
    stateActiveIconTrueBadgePadding,
    stateActiveIconTrueBadgeMargin,
    stateActiveIconTrueBadgeCursor,
  ]);

  const homeIconStyle = useMemo(() => {
    return {
      width: homeIconWidth,
      height: homeIconHeight,
    };
  }, [homeIconWidth, homeIconHeight]);

  const dashboardStyle = useMemo(() => {
    return {
      fontSize: dashboardFontSize,
      lineHeight: dashboardLineHeight,
      fontWeight: dashboardFontWeight,
      color: dashboardColor,
    };
  }, [
    dashboardFontSize,
    dashboardLineHeight,
    dashboardFontWeight,
    dashboardColor,
  ]);

  const numberNotificationBadgeStyle = useMemo(() => {
    return {
      backgroundColor: numberNotificationBadgeBackgroundColor,
      width: numberNotificationBadgeWidth,
      height: numberNotificationBadgeHeight,
    };
  }, [
    numberNotificationBadgeBackgroundColor,
    numberNotificationBadgeWidth,
    numberNotificationBadgeHeight,
  ]);

  const divStyle = useMemo(() => {
    return {
      lineHeight: divLineHeight,
      color: divColor,
    };
  }, [divLineHeight, divColor]);

  const arrowRight2Style = useMemo(() => {
    return {
      width: arrowRight2Width,
      height: arrowRight2Height,
    };
  }, [arrowRight2Width, arrowRight2Height]);

  return (
    <div
      className={styles.stateactiveIcontrueBadge}
      style={stateActiveIconTrueBadgeStyle}
      onClick={onNavItemClick}
    >
      <div className={styles.leadingIconNavLink}>
        <div className={styles.leadingIcon}>
          <img
            className={styles.homeIcon}
            alt=""
            src={dimension}
            style={homeIconStyle}
          />
        </div>
        <div className={styles.leadingIcon}>
          <div className={styles.dashboard} style={dashboardStyle}>
            {componentIconUrl}
          </div>
        </div>
      </div>
      {!trailingIconBadge && (
        <div className={styles.trailingIconBadge}>
          <div className={styles.badge}>
            <div
              className={styles.numberNotificationBadge}
              style={numberNotificationBadgeStyle}
            >
              <div className={styles.div} style={divStyle}>
                1
              </div>
            </div>
          </div>
          <div className={styles.badge}>
            <img
              className={styles.arrowRight2}
              alt=""
              src={componentLabelSize}
              style={arrowRight2Style}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StateActiveIconTrueBadge;
