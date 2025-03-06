import { ComponentProps, ReactNode } from 'react'

export const EHeadingTagType = {
	H1: 'h1',
	H2: 'h2',
	H3: 'h3',
	H4: 'h4',
	H5: 'h5',
	H6: 'h6',
} as const

export type THeadingTagType =
	(typeof EHeadingTagType)[keyof typeof EHeadingTagType]

export type THeading = {
	className?: ComponentProps<'h1'>['className']
	children: ReactNode
	TagType: THeadingTagType
}
