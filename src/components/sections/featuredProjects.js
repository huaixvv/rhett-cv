import tuhu_img from './img-tuhu.png';
import flow_img from './img-flow.png';
import de_img from './img-de.png';

const data = [
  {
    node: {
      frontmatter: {
        cover: {
          childImageSharp: {
            gatsbyImageData: {
              layout: 'constrained',
              placeholder: {
                fallback: '',
              },
              images: {
                sources: [
                  {
                    srcSet: tuhu_img,
                    type: 'image/png',
                    sizes: '(min-width: 500px) 700px, 100vw',
                  },
                ],
              },
              width: 700,
              height: 438,
            },
          },
        },
        cta: '',
        external: '',
        github: '',
        tech: ['B2C', 'H5', 'Javascript', 'Vue'],
        title: 'TUHU Car Refueling',
      },
      html: '<p>TUHU Car Refueling is a B2C (business-to-consumer) one, Users access the refueling page through an app, where they can place an order for refueling and enjoy certain discounts within the application.</p>',
    },
  },
  {
    node: {
      frontmatter: {
        cover: {
          childImageSharp: {
            gatsbyImageData: {
              layout: 'constrained',
              placeholder: {
                fallback: '',
              },
              images: {
                sources: [
                  {
                    srcSet: flow_img,
                    type: 'image/png',
                    sizes: '(min-width: 500px) 700px, 100vw',
                  },
                ],
              },
              width: 700,
              height: 438,
            },
          },
        },
        cta: '',
        external: '',
        github: '',
        tech: ['Workflow', 'React', 'LogicFlow.js', 'Java', 'Mysql'],
        title: 'Workflow Engine',
      },
      html: '<p>It\'s system of workflow for batch execution of script tasks. It\'s It uses JSON as the modeling language and implements parallel and branching execution of system tasks. It\'s more general and scalable</p>',
    },
  },
  {
    node: {
      frontmatter: {
        cover: {
          childImageSharp: {
            gatsbyImageData: {
              layout: 'constrained',
              placeholder: {
                fallback: '',
              },
              images: {
                sources: [
                  {
                    srcSet: de_img,
                    type: 'image/png',
                    sizes: '(min-width: 500px) 700px, 100vw',
                  },
                ],
              },
              width: 700,
              height: 438,
            },
          },
        },
        cta: '',
        external: 'https://huaixvv.github.io/decentral-hub-front',
        github: '',
        tech: ['Web3', 'Next', 'Ether', 'Hardhat', 'solidity'],
        title: 'Decentral Hub',
      },
      html: '<p>Some examples of Web3 projects, including a wallet, address builder, Hera token, faucet, and airdrop. All contracts have been deployed on the Sepolia testnet. Visit at <a href="https://huaixvv.github.io/decentral-hub-front" target="_blank">Decentral Hub</a></p>',
    },
  },
];

export default data;
