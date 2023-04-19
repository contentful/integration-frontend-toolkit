import { EntryCard, Flex, Heading, Badge, Paragraph } from '@contentful/f36-components';
import { styles } from './EntityCard.styles';
import Placeholder from './assets/placeholder.png';
import React from 'react';

export interface Props {
    title?: string,
    description?: string,
    className?: string,
    entityType: string;
    contentType: string,
    loading?: boolean;
    thumbnail?: string;
    withDragHandle?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const isMissingData = (title?: string): boolean => {
    return !title;
}

const EntityCard = (props: Props) => {
    const { title, loading, entityType, thumbnail, className } = props;
    const card = isMissingData(title) ?
        <EntryCard isLoading={loading} className={className} data-test-id="missing">
            <Flex>
                <Badge variant="negative" className={styles.missingBadge}>Deleted</Badge>
            </Flex>
            <Heading as="h2" data-test-id="title">
                {entityType} Missing
            </Heading>
            <Paragraph>
                This {entityType} is missing. It may have been deleted or moved.
            </Paragraph>
        </EntryCard>
        :
        <EntryCard
            {...props}
            className={className}
            isLoading={loading}
            thumbnailElement={<img alt="Thumbnail" src={thumbnail || Placeholder} />}
        />

    return (
        <div className={styles.root} id="EntityCard">
            {card}
        </div>
    );
}

export default EntityCard;
