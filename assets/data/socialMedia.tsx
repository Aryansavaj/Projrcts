import React from "react"
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter
} from "react-icons/fa"

export const socialMedia = (
  size: number
): {
  id: number
  url: string
  logo: React.ReactNode
}[] => {
  return [
    {
      id: 1,
      url: "https://facebook.com/checkified.se",
      logo: <FaFacebook size={size} />
    },
    {
      id: 2,
      url: "https://instagram.com/checkified",
      logo: <FaInstagram size={size} />
    },
    {
      id: 3,
      url: "https://twitter.com/checkified",
      logo: <FaTwitter size={size} />
    },
    {
      id: 4,
      url: "https://tiktok.com/@checkified",
      logo: <FaTiktok size={size} />
    },
    {
      id: 5,
      url: "https://discord.com",
      logo: <FaDiscord size={size} />
    }
  ]
}
