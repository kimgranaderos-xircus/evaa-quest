import { ColorModeIconButton } from "@/components/ColorModeIconButton"
import { Heading, HStack, Image, Spacer, Text } from "@chakra-ui/react"
import { useUser } from "@xw3/maki"
import Avatar from "boring-avatars"
import Link from "next/link"

export const AppHeader = ({ children }) => {
  const user = useUser()
  return (
    <HStack px={6} pt={4}>
      <Link href="/">
        <Image src="https://xircus.infura-ipfs.io/ipfs/QmfHDcfmefUBgAF8chPTN8g9jaD7LzT7mbFQzVFLjFsmzx" boxSize={34} />
      </Link>
      <Heading size="md">EVAA Quest</Heading>
      <Spacer />
      <ColorModeIconButton variant="outline" />
      {
        user && (
          <Link href="/admin">
            <HStack variant="ghost" size="sm" gap={2}>
              <Avatar size={24} name={user?._id || ''} variant="beam" />
              <Text fontSize="xs">{user?.name || user?.telegram || user?.username}</Text>
            </HStack>
          </Link>
        )
      }
      {children}
    </HStack>    
  )  
}