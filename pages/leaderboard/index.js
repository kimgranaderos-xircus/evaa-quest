import { AppLayout } from "@/layouts/AppLayout"
import { Heading, Text } from "@chakra-ui/react"
import { Leaderboard } from "@xw3/maki-quest"

export default function Leaders() {
  return (
    <AppLayout>
      <Heading fontSize="30px">Leaderboard ⚡️</Heading>
      <Text>Earn XPs, move ranks</Text>
      <Leaderboard />
    </AppLayout>
  )
}