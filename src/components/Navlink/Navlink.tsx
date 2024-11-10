"use client";
import { useState } from "react";
import Link from "next/link";

// import { Caret, Dropdown } from 'components'
import { useWidth } from "utils";
import { type NavlinkDataType } from "types";
import styles from "./navlink.module.css";

interface NavlinkProps {
  navlinkObj: NavlinkDataType;
  onClick: () => void;
}

export const Navlink: React.FC<NavlinkProps> = ({
  navlinkObj,
  onClick: handleClick,
}) => {
  const [, /* isActive */ setIsActive] = useState(false);
  const { label, url, children } = navlinkObj;
  const screenWidth = useWidth() || 800;
  return (
    <>
      {screenWidth >= 800 && children.length ? (
        <div
          className={styles.dropdownNavlink}
          onMouseOver={() => setIsActive(true)}
          onMouseOut={() => setIsActive(false)}
          onClick={handleClick}
        >
          <Link className={styles.navlink} href={url}>
            {label}
            {/* <Caret isFlipped={isActive} /> */}
          </Link>
          <div
            className={styles.dropdownContainer}
            data-testid="dropdownContainer"
          >
            {/* <Dropdown
							isOpen={isActive}
							items={children}
							render={(navlinkObj: NavlinkDataType) => (
								<Link className={styles.navlink} href={navlinkObj.url}>
									{navlinkObj.label}
								</Link>
							)}
						/> */}
          </div>
        </div>
      ) : (
        <Link className={styles.navlink} href={url} onClick={handleClick}>
          {label}
        </Link>
      )}
    </>
  );
};
