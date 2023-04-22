import { dataType } from "@/types/info.types"

const info:dataType = [
  {
    text: [
      {
        content: 'Design / Web Development',
        tag: 'h2',
        props: {}
      },
      {
        content: 'Works 19 — 23',
        tag: 'h3',
        props: {}
      }
    ]
  },
  {
    text: [
      {
        content: 'Profile',
        tag: 'a',
        props: {
          href: '#profile',
        }
      },
      {
        content: 'Links',
        tag: 'a',
        props: {
          href: 'https://linktr.ee/sammarxz',
          target: 'blank'
        }
      },
      {
        content: 'Email',
        tag: 'a',
        props: {
          href: 'mailto:sammarxz@protonmail.com',
          target: 'blank'
        }
      },
    ]
  }
]

export { info }