import { IconButton, useColorMode } from "@chakra-ui/react"
import { TbMoon, TbMoonFilled, TbSun, TbSunFilled } from "react-icons/tb"

export const ColorModeIconButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return <IconButton icon={colorMode == 'dark' ? <TbSunFilled /> : <TbMoonFilled />} onClick={toggleColorMode} />
}