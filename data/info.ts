import { dataType } from "@/types/info.types"

const info:dataType = [
  {
    text: [
      {
        content: 'Design Egineer',
        tag: 'h2',
        props: {}
      },
      {
        content: 'Showcase',
        tag: 'h3',
        props: {}
      },
      {
        content: '19 — 23',
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
        content: 'Read.cv',
        tag: 'a',
        props: {
          href: 'https://read.cv/sammarxz',
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