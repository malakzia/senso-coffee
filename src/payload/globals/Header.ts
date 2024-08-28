import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 8,
      fields: [
        {
          name: 'enableSubMenu',
          type: 'checkbox',
        },
        link({
          appearances: false,
        }),
        {
          name: 'subMenuItems',
          label: 'Sub Menu Navigations',
          type: 'array',
          admin: {
            condition: (__, { enableSubMenu }) => Boolean(enableSubMenu),
          },
          fields: [
            {
              name: 'menuHeading',
              label: 'Menu Heading',
              type: 'text',
              required: true,
            },
            {
              name: 'subMenuLinks',
              label: 'Sub Menu Links',
              type: 'array',
              fields: [link({ appearances: false })],
            },
          ],
        },
      ],
    },
  ],
}
