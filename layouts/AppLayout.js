import { Box } from "@chakra-ui/react"
import { useChatData, useTelegramChatData, useTelegramLogin } from "@xw3/maki"
import { GramLayout, FixedFooter, FixedHeader, NavBar } from "@xw3/maki-chakra"
import { useReferralInvite } from '@xw3/maki-quest'
import { motion } from "framer-motion"
import { AppHeader } from "./AppHeader"

export const AppLayout = ({ children, footer }) => {
  useTelegramLogin()
  const { chatData } = useTelegramChatData(useChatData())
  useReferralInvite(chatData)

  const navs = [
    // {
    //   key: 'home',
    //   url: '/',
    //   label: 'Home',
    //   icon: 'TbBuildingCircus'
    // },
    {
      key: 'quests',
      url: '/',
      label: 'Quest',
      icon: 'TbDiamond'
    },
    {
      key: 'play',
      url: '/play',
      label: 'Play',
      icon: 'TbSparkles'
    },       
    {
      key: 'leaderboard',
      url: '/leaderboard',
      label: 'Leaders',
      icon: 'TbTrophy'
    },
    {
      key: 'account',
      url: '/account',
      label: 'Account',
      icon: 'TbUserHexagon'
    },
  ]  

  return (
    <GramLayout>
      <FixedHeader backdropFilter="blur(30px)">
        <AppHeader />
      </FixedHeader>
      <Box bg="white" as={motion.div} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} px={6} _dark={{ bg: 'black' }}> 
        { children }
      </Box>
      <FixedFooter>
        { footer && footer }
        <NavBar 
          navs={navs}
          theme={{
            navs: { px: 2, pb: 3 },
            navStack: { 
              pos: 'relative', 
              clipPath: 'polygon(0 0, 95% 0, 100% 25%, 100% 100%, 5% 100%, 0 75%)', overflow: 'hidden',
              _before: { zIndex: -1, pos: 'absolute', content: '" "', width: '100%', height: '100%', bg: 'hsl(259 100% 50%)', transform: 'skewX(0deg)' },
              // _after: { zIndex: -1, pos: 'absolute', content: '" "', width: '100%', height: '100%', bg: 'blue', transform: 'skewX(0deg)', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%)' },      
              _dark: { 
                _before: { bg: 'hsl(259 100% 50%)' }
              }
            },
            navIcon: { color: '#fff', _dark: { color: '#fff' } },
            navLabel: { color: '#fff', _dark: { color: '#fff' } },
          }}
          />
      </FixedFooter>
    </GramLayout>
  )
}
