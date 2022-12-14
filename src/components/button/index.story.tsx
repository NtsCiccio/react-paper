import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './index'
import React from 'react'

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        outline: {
            options: [true, false],
            control: { type: 'radio' }
        },
        color: {
            options: ['primary', 'secondary', 'success', 'warning', 'danger'],
            control: { type: 'select' }
        },
        size: {
            options: ['large', 'default', 'small', 'block'],
            control: { type: 'select' }
        },
        disabled: {
            options: [true, false],
            control: { type: 'radio' }
        },
        onClick: {
            description: 'Function to be triggered on click',
        }
    },
} as ComponentMeta<typeof Button>



export const Primary = Template.bind({})
Primary.args = {
    children: 'button',
    color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args, color: 'secondary' }

export const LinkButton = Template.bind({})
LinkButton.args = { children: 'Link button', href: 'https://www.getpapercss.com/' }