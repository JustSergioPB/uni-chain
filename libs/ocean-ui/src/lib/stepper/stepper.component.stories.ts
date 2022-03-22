import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StepperComponent } from './stepper.component';

export default {
  title: 'StepperComponent',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<StepperComponent>;

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}