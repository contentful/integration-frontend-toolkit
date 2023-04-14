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
    withDragHandle?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const EntityCard = (props: Props) => {
    const { title, description, entityType, contentType, loading, thumbnail, withDragHandle, onClick } = props;
    const card = title ?
        <EntryCard contentType={contentType}
            title={title}
            description={description}
            isLoading={loading}
            thumbnailElement={<img alt="Thumbnail" src={thumbnail || Placeholder} />}
            withDragHandle={withDragHandle}
            onClick={onClick} />
        :
        <Card>
            <Badge variant="negative" className={styles.missingBadge}>Deleted</Badge>
            <Heading as="h2" data-test-id="title">
                {entityType} Missing
            </Heading>
            <Paragraph>
                This {entityType} is missing. It may have been deleted or moved.
            </Paragraph>
        </Card>


    return (
        <div className={styles.root} id='EntityCard'>
            {card}
        </div>
    );
}

export default EntityCard;