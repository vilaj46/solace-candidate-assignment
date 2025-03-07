import {
	EHeadingTagType,
	THeading,
} from '@/app/components/Heading/Heading.types'

export const Heading = ({ children, className, TagType }: THeading) => {
	const classes = {
		[EHeadingTagType.H1]: 'text-2xl',
		[EHeadingTagType.H2]: 'text-xl',
		[EHeadingTagType.H3]: 'text-lg',
		[EHeadingTagType.H4]: 'text-base',
		[EHeadingTagType.H5]: 'text-sm',
		[EHeadingTagType.H6]: 'text-xs',
	}

	const classNameWithProps = classes[TagType] + ' ' + className

	return <TagType className={classNameWithProps}>{children}</TagType>
}
