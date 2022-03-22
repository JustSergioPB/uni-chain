import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DatepickerComponent } from './datepicker.component';

export default {
  title: 'DatepickerComponent',
  component: DatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DatepickerComponent>;

const Template: Story<DatepickerComponent> = (args: DatepickerComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}