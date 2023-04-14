import { EntryCard, Card, Heading, Badge, Paragraph } from '@contentful/f36-components';
import { styles } from './EntityCard.styles';
import Placeholder from './assets/placeholder.png';

export interface Props {
    title?: string,
    description?: string,
    entityType: string;
    contentType: string,
    loading?: boolean;
    thumbnail?: string;
}

const EntityCard = (props: Props) => {
    const { title, description, entityType, contentType, loading, thumbnail } = props;
    let card;

    if (title) {
        card =
            <EntryCard contentType={contentType}
                title={title}
                description={description}
                isLoading={loading}
                thumbnailElement={<img alt="Thumbnail" src={thumbnail || Placeholder} />} />
    } else {
        card =
            <Card>
                <Badge variant="negative" className={styles.missingBadge}>Deleted</Badge>
                <Heading as="h2">
                    {entityType} Missing
                </Heading>
                <Paragraph>
                    This {entityType} is missing. It may have been deleted or moved.
                </Paragraph>
            </Card>
    }

    return (
        <div className={styles.root}>

            {card}
        </div>
    );
}

export default EntityCard;