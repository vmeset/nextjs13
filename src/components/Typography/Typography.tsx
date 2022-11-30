type Tag = 'div' | 'p' | 'h1' | 'h2' | 'span'
type Variant = 'title-1' | 'body-1' | 'body-2' | 'label'

interface TypographyProps {
    tag: Tag
    variant: Variant
    children: string
}

const Typography: React.FC<TypographyProps> = ({tag = 'div', variant, children}) => {
    const Component = tag

    return <Component className={variant}>{children}</Component>
};

export default Typography;