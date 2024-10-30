import { BackpackIcon, PersonIcon, ReaderIcon, CrumpledPaperIcon, AvatarIcon, ExitIcon } from '@radix-ui/react-icons';
import { Box, Flex, Heading, Separator, Tooltip } from '@radix-ui/themes';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';

const Layout = () => {
  const { logout } = useAuth();
  
  return (
    <div className='w-screen h-screen'>
      <Flex height="100%">
        <Box width="auto" py="4" className='border-r-[1px] border-r-zinc-700'>
          <Flex direction="column" align="center">
            <Link to="/">
              <CrumpledPaperIcon width={36} height={36} className='' />
            </Link>
            <Separator mt="3" size="3" mb="6" />

            <Tooltip content="Partner" side='right'>
              <Link className='mb-5' to="/partners">
                <AvatarIcon width={24} height={24} />
              </Link>
            </Tooltip>

            <Tooltip content="Participants" side='right'>
              <Link className='mb-5' to="/participants">
                <PersonIcon width={24} height={24} />
              </Link>
            </Tooltip>

            <Tooltip content="Jobs" side='right'>
              <Link className='mb-5' to="/jobs">
                <BackpackIcon width={24} height={24} />
              </Link>
            </Tooltip>

            <Tooltip content="Projects" side='right'>
              <Link className='mb-5' to="/projects">
                <ReaderIcon width={24} height={24} />
              </Link>
            </Tooltip>
            <Tooltip content="Logout" side='right'>
              <ExitIcon width={24} height={24} onClick={logout} />
            </Tooltip>
          </Flex>
        </Box>
        <Box flexGrow="1" p="4">
          <Outlet/>
        </Box>
      </Flex>
    </div>
  )
}

export default Layout;