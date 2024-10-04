import { useRef, useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useSettings } from '@core/hooks/useSettings';

const BadgeContentSpan = styled('span')({
  width: 8,
  height: 8,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: 'var(--mui-palette-success-main)',
  boxShadow: '0 0 0 2px var(--mui-palette-background-paper)',
});

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ fullName: '', email: '' }); // Estado para armazenar os dados do usuário

  const anchorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { settings } = useSettings();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Obter o token do localStorage (ou outra fonte, se necessário)
        const token = localStorage.getItem('accessToken');

        if (!token) {
          console.error('Token de autenticação não encontrado');
          return;
        }

        // Fazer a requisição para a rota de dados protegidos
        const response = await fetch('http://localhost:4000/users/protected-route', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser({ fullName: data.user.fullName, email: data.user.email }); // Armazena os dados do usuário no estado
        } else {
          console.error('Erro ao buscar os dados do usuário:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const handleDropdownClose = (event?: MouseEvent<HTMLLIElement> | (MouseEvent | TouchEvent), url?: string) => {
    if (url) {
      router.push(url);
    }

    if (anchorRef.current && anchorRef.current.contains(event?.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleUserLogout = async () => {
    localStorage.removeItem('accessToken');
    router.push('/login');
  };

  return (
    <>
      <Badge
        ref={anchorRef}
        overlap='circular'
        badgeContent={<BadgeContentSpan onClick={handleDropdownOpen} />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        className='mis-2'
      >
        <Avatar
          ref={anchorRef}
          alt={user.fullName || 'Usuário'}
          src='/images/avatars/1.png'
          onClick={handleDropdownOpen}
          className='cursor-pointer bs-[38px] is-[38px]'
        />
      </Badge>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        className='min-is-[240px] !mbs-4 z-[1]'
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top',
            }}
          >
            <Paper className={settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg'}>
              <ClickAwayListener onClickAway={(e) => handleDropdownClose(e as MouseEvent | TouchEvent)}>
                <MenuList>
                  <div className='flex items-center plb-2 pli-4 gap-2' tabIndex={-1}>
                    <Avatar alt={user.fullName} src='/images/avatars/1.png' />
                    <div className='flex items-start flex-col'>
                      <Typography className='font-medium' color='text.primary'>
                        {user.fullName || 'Usuário'}
                      </Typography>
                      <Typography variant='caption'>{user.email || 'email@example.com'}</Typography>
                    </div>
                  </div>
                  <Divider className='mlb-1' />
                  <MenuItem className='gap-3' onClick={(e) => handleDropdownClose(e)}>
                    <i className='ri-user-3-line' />
                    <Typography color='text.primary'>My Profile</Typography>
                  </MenuItem>
                  <MenuItem className='gap-3' onClick={(e) => handleDropdownClose(e)}>
                    <i className='ri-settings-4-line' />
                    <Typography color='text.primary'>Settings</Typography>
                  </MenuItem>
                  <MenuItem className='gap-3' onClick={(e) => handleDropdownClose(e)}>
                    <i className='ri-money-dollar-circle-line' />
                    <Typography color='text.primary'>Pricing</Typography>
                  </MenuItem>
                  <MenuItem className='gap-3' onClick={(e) => handleDropdownClose(e)}>
                    <i className='ri-question-line' />
                    <Typography color='text.primary'>FAQ</Typography>
                  </MenuItem>
                  <div className='flex items-center plb-2 pli-4'>
                    <Button
                      fullWidth
                      variant='contained'
                      color='error'
                      size='small'
                      endIcon={<i className='ri-logout-box-r-line' />}
                      onClick={handleUserLogout}
                      sx={{ '& .MuiButton-endIcon': { marginInlineStart: 1.5 } }}
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default UserDropdown;
