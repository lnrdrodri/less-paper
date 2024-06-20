import { BackpackIcon, PersonIcon, ReaderIcon, CrumpledPaperIcon, AvatarIcon } from '@radix-ui/react-icons';
import { Box, Flex, Heading, Separator, Tooltip } from '@radix-ui/themes';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='w-screen h-screen'>
      <Flex height="100%">
        <Box width="auto" py="4" className='border-r-[1px] border-r-zinc-700'>
          <Flex direction="column" align="center">
            <Link to="/">
              <CrumpledPaperIcon width={36} height={36} className='mb-12' />
            </Link>

            <Separator my="3" size="3" />
            <Tooltip content="Partner">
              <Link to="/partners">
                <AvatarIcon width={24} height={24} />
              </Link>
            </Tooltip>
            <Separator my="3" size="3" />

            <Tooltip content="Participants">
              <Link to="/participants">
                <PersonIcon width={24} height={24} />
              </Link>
            </Tooltip>
            <Separator my="3" size="3" />

            <Tooltip content="Jobs">
              <Link to="/jobs">
                <BackpackIcon width={24} height={24} />
              </Link>
            </Tooltip>
            <Separator my="3" size="3" />

            <Tooltip content="Projects">
              <Link to="/projects">
                <ReaderIcon width={24} height={24} />
              </Link>
            </Tooltip>
            <Separator my="3" size="3" />
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