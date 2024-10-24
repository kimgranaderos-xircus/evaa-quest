import { AppLayout } from "@/layouts/AppLayout"
import { Button, Card, Heading, HStack, Icon, Image, List, Spacer, Spinner, Text } from "@chakra-ui/react"
import { QuestTasks, useQuestorJoin, useQuests } from "@xw3/maki-quest"
import Link from "next/link"
import { TbArrowRight, TbDiamondFilled, TbDiamonds, TbUsers } from "react-icons/tb"

export default function Home() {
  return (
    <AppLayout>
      <Card variant="outline" bgColor="rgb(81, 0, 255)" p={4} rounded="md">
        <Image 
          src="https://xircus.infura-ipfs.io/ipfs/QmfHDcfmefUBgAF8chPTN8g9jaD7LzT7mbFQzVFLjFsmzx"
          boxSize="50px"
          />
        <Heading>Community Partnership Quest</Heading>
        <Text>Join our community quest</Text>
        <HStack>
          <HStack spacing={1}>
            <Text fontWeight="bold">8.3K</Text>
            <Icon as={TbUsers} />
          </HStack>
          <HStack spacing={1} ml={2}>
            <Text fontWeight="bold">168.5K</Text>
            <Icon as={TbDiamondFilled} />
          </HStack>
          <Spacer />
          <Button leftIcon={<TbDiamonds />} size="sm">
            Connect
          </Button>
        </HStack>
      </Card>
      <Text color="gray.500" fontSize="12px" mt={2} mb={5} ml={4}>
        EVAA XPs are earned by completing each task
      </Text>

      <QuestTasks
        questId={'66507132f6826017789b74d9'}
        symbol="XP"
        theme={{
          list: { spacing: 3 },
          join: { variant: 'outline', borderColor: 'white', borderBottomWidth: 3 },
          name: { fontWeight: 'bold', fontSize: 'md' },
          points: { fontWeight: 'bold' },
        }}
      />
    </AppLayout>
  )
}