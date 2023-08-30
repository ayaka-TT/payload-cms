import { Block } from 'payload/types';
import linkGroup from '../fields/linkGroup';
import richText from '../fields/richText';
import Video from '../fields/richText/video';
import HR from '../fields/richText/hr';

export const Quote: Block = {
  slug: 'quote',
  labels: {
    singular: 'Quote',
    plural: 'Quote Blocks',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
    },
    {
      name: 'author',
      type: 'text',
    },
  ]
};

export default Quote;
