import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DialogComponent } from './dialog.component';

export default {
  title: 'DialogComponent',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DialogComponent>;

const Template: Story<DialogComponent> = (args: DialogComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}