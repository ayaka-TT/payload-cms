import { CollectionConfig } from 'payload/types';
import CategorySummary from '../components/CategorySummary'
import Content from '../blocks/Content';

const Categories: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'id', 'archived'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
    {
      name: 'archived',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Archiving filters it from being an option in the posts collection',
      },},
      {
        name: 'layout',
        label: 'Page Layout',
        type: 'blocks',
        minRows: 1,
        // the blocks are reusable objects that will be added in array to the document, these are especially useful for structuring content purpose built for frontend componentry
        blocks: [
          Content,
        
        ],
      },
    
    {
      name: 'summary',
      // ui fields do not impact the database or api, and serve as placeholders for custom components in the admin panel
      type: 'ui',
      admin: {
        position: 'sidebar',
        components: {
          // this custom component will fetch the posts count for how many posts have this category
          Field: CategorySummary,
        }
      }
    }
  ],
}

export default Categories;
