import { red, blue, yellow, green } from '@material-ui/core/colors';

export const graphConfig = {
  nodeHighlightBehavior: true,
  node: {
    size: 120,
  },
  link: {
    highlightColor: 'gray'
  }
}

export const graphNodeColor = {
  fire: red[700],
  water: blue[700],
  earth: green[700],
  air: yellow[700]
}
