import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChronologyComponent } from './chronology.component';

export default {
  title: 'ChronologyComponent',
  component: ChronologyComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChronologyComponent>;

const Template: Story<ChronologyComponent> = (args: ChronologyComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}