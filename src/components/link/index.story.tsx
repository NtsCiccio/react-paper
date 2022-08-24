import { ComponentMeta, ComponentStory } from '@storybook/react'

import Link from './index'
import React from 'react'

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export default {
    title: 'Link',
    component: Link,
} as ComponentMeta<typeof Link>


export const Default = Template.bind({})
Default.args = {
    children: 'Link to PaperCSS',
    href: 'https://www.getpapercss.com/'
}