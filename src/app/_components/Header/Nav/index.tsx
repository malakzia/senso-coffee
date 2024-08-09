import React, { useState } from 'react'
import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CMSLink } from '../../Link'
import classes from './index.module.scss' // Assuming you integrate Tailwind CSS classes here

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
  }

  return (
    <nav
      className={[classes.nav, user === undefined && classes.hide, 'lg:flex hidden flex-1']
        .filter(Boolean)
        .join(' ')}
    >
      {navItems.map(({ link, enableSubMenu, subMenuItems }, i) => (
        <div
          key={i}
          className={classes.navItem}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <CMSLink className="text-xs" {...link} appearance="none" />
          {activeIndex === i && enableSubMenu && (
            <div
              className={[
                classes.subMenu,
                activeIndex === i ? classes.active : '',
                'lg:max-w-[1080px] duration-500 bg-white rounded-lg backdrop-blur-xl',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {subMenuItems?.map((menuItem, j) => (
                  <div key={j} className="p-4 flex flex-col text-start">
                    <span className="text-lg font-medium text-brand-dark">
                      {menuItem.menuHeading}
                    </span>
                    <div className="mt-2 flex flex-col">
                      {menuItem.subMenuLinks?.map((subItem, k) => (
                        <CMSLink
                          className="text-brand-black hover:text-brand-orange px-2 py-[2px] duration-300 ease-in-out no-underline drop-shadow-none shadow-none"
                          key={k}
                          {...subItem.link}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
