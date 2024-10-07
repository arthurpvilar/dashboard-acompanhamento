/* eslint-disable import/no-unresolved */
// MUI Imports
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, MenuItem } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'
import { BackEndUsersType, UserRole } from '@/types/apps/userTypes'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

type Props = {
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: Props) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { isBreakpointReached } = useVerticalNav()

  // State para armazenar o usuário logado
  const [loggedUser, setLoggedUser] = useState<BackEndUsersType | null>(null)

  // useEffect para definir o usuário logado somente no lado do cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user')
      setLoggedUser(user ? JSON.parse(user) : null)
    }
  }, [])

  // Vars
  const { transitionDuration } = verticalNavOptions

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuItem href='/home' icon={<i className='ri-home-smile-line' />}>
          Home
        </MenuItem>
        <MenuItem href='/users' icon={<i className='ri-user-line' />}>
          Usuários
        </MenuItem>

        {loggedUser?.role === UserRole.TEACHER || loggedUser?.role === UserRole.ADMINISTRATOR ? (
          <MenuItem href='/quiz' icon={<i className='ri-logout-box-r-line' />}>
            Questionários
          </MenuItem>
        ) : null}

        {loggedUser?.role === UserRole.STUDENT || loggedUser?.role === UserRole.ADMINISTRATOR ? (
          <MenuItem href='/my-quizzes' icon={<i className='ri-file-list-line' />}>
            Meus Questionários
          </MenuItem>
        ) : null}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
